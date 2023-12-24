const Task = require("../models/task");

class TaskService {
  /*
   *  @Input param1 sortBy
   *  @Input param2 sortOrder
   *  @Input param3 completionStatus
   *  @Input param3 dueDate
   *  @Input param3 priority
   *  @returns Array of Tasks
   */
  async getTask(sortBy, sortOrder, completionStatus, dueDate, priority) {
    const query = {};

    // Add filtering based on query parameters
    if (completionStatus) {
      query.status = completionStatus === "true";
    }
    if (dueDate) {
      query.dueDate = new Date(dueDate);
    }
    if (priority) {
      query.priority = priority;
    }

    // Sort tasks based on query parameters
    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    const tasks = await Task.find(query).sort(sortOptions);
    return tasks;
  }
}

module.exports = TaskService;
