import { Request, Response, NextFunction } from "express";
import express from "express";
import stuffNeedToDoModel from "../models/stuffNeedToDo.model";
import stuffNeedToDo from "../interfaces/stuffNeedToDo.interface";
import { generateRandomString } from "../utils/1.string.util";
import { generateRandomNumber } from "../utils/2.number.util";
const router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const data = await stuffNeedToDoModel.getAll();

  return res.json({
    data: data,
  });
});

router.post("/", async function (req: Request, res: Response) {
  if (req.body.stuffName === undefined) {
    return res.json({
      message: "Body error!",
    });
  }

  const { stuffName } = req.body;

  const lastRecord: unknown = await stuffNeedToDoModel.getLastRecord();

  if (lastRecord instanceof Array) {
    const stuff: stuffNeedToDo = {
      id: lastRecord[0].id + 1,
      stuffName: stuffName,
      isDone: false,
    };

    const ret = await stuffNeedToDoModel.add(stuff);

    return res.json({
      result: ret,
    });
  }

  return res.json({
    message: "Add new stuff failed!",
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
    result: ret,
    isDone: isDone,
    id: id,
  });
});

router.get(
  "/virtual-bulk-insert-records",
  async function (req: Request, res: Response) {
    let count = 0;
    console.log("requested");

    for (let i = 1000000; i >= 6; --i) {
      let stuff: stuffNeedToDo = {
        id: i,
        isDone: false,
        stuffName: generateRandomString(generateRandomNumber(10, 200)),
      };

      await stuffNeedToDoModel.add(stuff);

      count++;
    }

    // 1m records vitual add time - > 17:40 + 16:29 time
    /**
     * 1m user create account at the same time ? -> too long
     * Single thread lang
     *
     */
    return res.json({
      totalRecordsInserted: count,
    });
  }
);

export default router;
