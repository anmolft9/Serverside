import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "you hit the get root route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "you hit the post root route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
