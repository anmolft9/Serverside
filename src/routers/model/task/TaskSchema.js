import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
      maxlength: 100,
    },
    hr: {
      type: Number,
      require: true,
      maxlength: 168,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Task", taskSchema); ///tasks