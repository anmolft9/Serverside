import express from "express";
import { insertTask } from "./model/task/TaskModel.js";

const router = express.Router();

let fakeDB = [
  { _id: 1, task: "watching tv", hr: 30 },
  { _id: 2, task: "watching mobile", hr: 3 },
  { _id: 3, task: "watching tablet", hr: 2 },
  { _id: 4, task: "watching football", hr: 2 },
  { _id: 5, task: "watching a girl", hr: 2 },
];

router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;

    let data = fakeDB;

    if (_id) {
      data = fakeDB.filter((item) => item._id === +_id);
    }
    ///query the db and get all the task
    res.json({
      status: "success",
      message: "you hit the get root route",
      data,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

////POST
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    //call db query to the store
    // fakeDB.push(req.body);
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "you hit the post root route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//////PATCH
router.patch("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "you hit the post patch route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

/////DELETE
router.delete("/", (req, res, next) => {
  try {
    const { _id } = req.body;

    let filteredArg = fakeDB.filter((item) => item?._id !== +_id);
    fakeDB = filteredArg;
    // if (_id) {
    //   data = fakeDB.filter((item) => item._id === +_id);
    // }

    res.json({
      status: "success",
      message: "you hit the post delete route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
