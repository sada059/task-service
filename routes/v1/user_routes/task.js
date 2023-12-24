const express = require("express");
const TaskController = new (require("../../../controllers/TaskController"))();

const router = express.Router();

router.get("/tasks", TaskController.getTask); //Assuming this route is only exposed to admin
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:taskId", TaskController.editTask);
router.get("/tasks/user", TaskController.getUserTask);
router.patch("/tasks/:taskId/complete", TaskController.markTaskComplete);

module.exports = router;
