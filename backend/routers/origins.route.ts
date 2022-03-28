import express, { Request, Response } from "express";
import originsModel from "../models/origins.model";
const router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const ret = await originsModel.getAll();

  if (JSON.stringify(ret) === "[]") {
    return res.json({
      origins: [],
    });
  }

  return res.json({
    origins: ret,
  });
});

export default router;
