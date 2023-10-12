const Task = require("../Models/taskModel");
const asyncWrapper = require("../Middlewares/async");
const { createCustomError } = require("../error/custom-error");
const createTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    if (!title) {
      throw new Error("Title can not be empty.");
    }
    const data = await Task.create({ title, status });
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.status(200).json({ tasks });
  // res.status(400).json({ error: error.message });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    // throw new Error(`No task found with id ${id}`);
    return next(createCustomError(`No task found with id ${id}`, 404));
  }
  res.status(200).json({ task });
});

// const getTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     if (!task) {
//       throw new Error(`No task found with id ${id}`);
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndRemove(id);
    if (!task) {
      throw new Error(`This task does not exist!!`);
    }
    res.status(200).json({ message: "task deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, status },
      { new: true, runValidators: true }
    );
    res.status(200).json({ task, message: "updated successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const testingController = async (req, res) => {
//   throw new Error("the err is testing async");
//   res.status(200).json({ msg: "product testing route" });
// };
module.exports = { createTask, updateTask, getAllTask, getTask, deleteTask };
