import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import express from "express";
import { queryDatabase } from "../config/database.config";

const router = express.Router();

interface stuff_need_to_do {
  id: Number;
  stuff_name: String;
  is_done: Boolean;
}

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  const query = "select * from stuff_need_to_do";
  const ret = queryDatabase(query);
});

export default router;
