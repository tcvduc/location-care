import express, { Request, Response } from "express";
import cdnServerModel from "../models/cdnServer.model";
const router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const uri = await cdnServerModel.getExposeUri();

  if (uri instanceof Array) {
    return res.json({
      ret: uri[0],
    });
  }

  return res.json({
    ret: uri,
  });
});

export default router;
