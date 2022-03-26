import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import express from "express";
const router = express.Router();

interface stuff_need_to_do {
  id: Number;
  stuff_name: String;
  is_done: Boolean;
}

router.get(
  "/stuff-need-to-do",
  function (req: Request, res: Response, next: NextFunction) {}
);
