import { Request, Response, NextFunction } from "express";
import express from "express";
import stuffNeedToDoModel from "../models/stuffNeedToDo.model";
import stuffNeedToDo from "../interfaces/stuffNeedToDo.interface";
import { generateRandomString } from "../utils/1.string.util";
import { generateRandomNumber } from "../utils/2.number.util";
import shadowStuffNeedToDoModel from "../models/shadowStuffNeedToDo.model";
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
  const shadowLastRecords: unknown =
    await shadowStuffNeedToDoModel.getLastRecord();

  if (lastRecord instanceof Array && shadowLastRecords instanceof Array) {
    const stuff: stuffNeedToDo = {
      id: lastRecord[0].id + 1,
      stuffName: stuffName,
      isDone: false,
    };

    const shadowStuff: stuffNeedToDo = {
      id: shadowLastRecords[0].id + 1,
      stuffName: stuffName,
      isDone: false,
    };

    const ret = await stuffNeedToDoModel.add(stuff);
    const shadowRet = await shadowStuffNeedToDoModel.add(shadowStuff);

    return res.json({
      ret: ret,
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
    ret: ret,
    isDone: isDone,
    id: id,
  });
});

router.get(
  "/virtual-bulk-insert-records",
  async function (req: Request, res: Response) {
    let count = 0;

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

router.delete("/", async function (req: Request, res: Response) {
  if (req.body.id === undefined) {
    return res.json({
      message: "Body error!",
    });
  }

  const { id } = req.body;

  const ret = await stuffNeedToDoModel.del(id);

  return res.json({
    ret,
  });
});

router.post("/undo", async function (req: Request, res: Response) {
  if (req.body.id === undefined || req.body.stuffName === undefined) {
    return res.json({
      message: "Body error!",
    });
  }

  const { id, stuffName } = req.body;

  const stuff: stuffNeedToDo = {
    id: id,
    stuffName: stuffName,
    isDone: false,
  };

  const ret = await stuffNeedToDoModel.add(stuff);

  return res.json({
    ret,
  });
});

export default router;
