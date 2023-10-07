const Task = require("../Models/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    if (!title) {
      throw new Error("Title can not be empty.");
    }
    const data = await Task.create({ title, status });
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      throw new Error(`No task found with id ${id}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
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
    const task = await Task.findByIdAndUpdate(id, { title, status });
    res.status(200).json({ task, message: "updated successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTask, updateTask, getAllTask, getTask, deleteTask };
