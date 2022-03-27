import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import express from "express";
import stuffNeedToDoModel from "../models/stuffNeedToDo.model";
const router = express.Router();

router.get(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    const data = await stuffNeedToDoModel.getAll();
    console.log("data: ", data);

    return res.json({
      data: data,
    });
  }
);

export default router;
