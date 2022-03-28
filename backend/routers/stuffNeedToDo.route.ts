import { Request, Response, NextFunction } from "express";
import express from "express";
import stuffNeedToDoModel from "../models/stuffNeedToDo.model";
const router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const data = await stuffNeedToDoModel.getAll();

  return res.json({
    data: data,
  });
});

router.put("/", async function (req: Request, res: Response) {
  if (req.body.id === undefined || req.body.isDone === undefined) {
    return res.json({
      message: "Body error!",
    });
  }

  const { id, isDone } = req.body;

  const ret = await stuffNeedToDoModel.editIsDone(id, isDone);

  return res.json({
    message: "Update isDone successfully!",
    ret,
    isDone: isDone,
    id: id,
  });
});

export default router;
