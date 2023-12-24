const mongooseModel = require("../lib/utils/db").get();
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    taskName: String,
    description: String,
    priority: Number,
    dueDate: Date,
    completed: Boolean,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooseModel.model("tasks", TaskSchema);
