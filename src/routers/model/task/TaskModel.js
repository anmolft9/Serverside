import TaskSchema from "./TaskSchema.js";

//insert query
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
//select query
export const getTask = () => {
  return TaskSchema.find();
};
export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};

//update query

//delete query
