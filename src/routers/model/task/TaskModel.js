import TaskSchema from "./TaskSchema.js";

//insert query
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
//select query

//update query

//delete query
