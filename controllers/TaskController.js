const Task = require("../models/task");
const EventEmitter = require("events");
const TaskService = new (require("../services/TaskService"))();

const eventEmitter = new EventEmitter();

class TaskController {
  async getTask(req, res) {
    const { sortBy, sortOrder, completionStatus, dueDate, priority } =
      req.query;

    const tasks = await TaskService.getTask(
      sortBy,
      sortOrder,
      completionStatus,
      dueDate,
      priority
    );

    return res.status(200).json({
      success: true,
      message: "returning tasks based on filter conditions",
      data: tasks,
    });
  }

  async createTask(req, res) {
    let TaskData = req.body;
    const response = await Task.create(TaskData);
    return res.status(201).json({
      success: true,
      message: "Task creation successful",
      data: response,
    });
  }

  async editTask(req, res) {
    const { taskId } = req.params;
    const taskToUpdate = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskId }, taskToUpdate, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "Updation successful",
      data: task,
    });
  }

  async getUserTask(req, res) {
    const userId = req.user?.id; // Assuming logged in user's ID is stored in req.user.id
    const tasks = await Task.find({ assignedTo: userId });
    return res.status(200).json({
      success: true,
      message: "Fetch user tasks successful",
      data: tasks,
    });
  }

  async markTaskComplete(req, res) {
    const taskId = req.params?.taskId;
    const userId = req.user?.id; // Assuming logged in user's ID is stored in req.user.id

    const task = await Task.findOne({ _id: taskId, assignedTo: userId });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    task.completed = true;
    await task.save();

    eventEmitter.emit("taskCompleted", {
      taskId,
      userId,
      completionTime: new Date(),
    });

    return res.status(200).json({
      success: true,
      message: "Task marked as complete",
    });
  }
}

eventEmitter.on("taskCompleted", (data) => {
  console.log(
    `Task ID ${data.taskId} completed by User ID ${data.userId} at ${data.completionTime}`
  );
});
module.exports = TaskController;
