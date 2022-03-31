import express, { Request, Response } from "express";
import cdnServerModel from "../models/cdnServer.model";
const router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const allRoutes = await cdnServerModel.getAllApiRouteServices();
  const defaultApiUriForStephen = "/api/stephen";
  const currentActivateUri = await cdnServerModel.getCurrentActiveURI();
  const uris = [];

  if (allRoutes instanceof Array) {
    let currentFullUri = "";
    for (let i = allRoutes.length - 1; i >= 0; --i) {
      currentFullUri =
        currentActivateUri + defaultApiUriForStephen + allRoutes[i].route;
      uris.push(currentFullUri);
    }
  }

  return res.json({
    uris: uris,
  });
});

export default router;
