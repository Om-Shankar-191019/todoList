const express = require("express");
const {
  createTask,
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/post").post(createTask).get(getAllTask);
router.route("/post/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
