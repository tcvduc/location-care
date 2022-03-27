import express, { Express, Request, Response, NextFunction } from "express";
import stuffNeedToDoRouter from "./routers/stuffNeedToDo.route";
import slashRouter from "./routers/slash.route";
import http from "http";
import cors from "cors";
import db from "./config/database.config";

(() => {
  let allowOriginList = ["http://example1.com"];

  const corsOptions = {
    origin: async function (origin: never, callback: Function) {
      const origins: [] = await db.loadOrigins();
      if (origins.indexOf(origin) !== -1) {
        callback(null, true);
      }

      if (origins.indexOf(origin) === -1) {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  let app: Express = express();

  // parse the request
  app.use(express.urlencoded({ extended: false }));

  // parse json data
  app.use(express.json());

  // API Rule
  app.use(cors(corsOptions));
  // app.use(function (req: Request, res: Response, next: NextFunction) {
  //   // set the CORS policy
  //   res.header("Access-Control-Allow-Origin", "*");
  //   // set the cors headers
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "origin, X-Requested-With,Content-Type,Accept,Authorization"
  //   );
  //   // set the cors method headers
  //   if (req.method === "options") {
  //     res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
  //     return res.status(200).json({
  //       options_request_method: "options_request_method",
  //     });
  //   }

  //   next();
  // });

  // routers
  app.use("/", slashRouter);
  app.use("/api/stuffNeedToDo", stuffNeedToDoRouter);

  // Error handling

  app.use(function (req: Request, res: Response, next: NextFunction) {
    const error = new Error("Not found!");
    return res.status(404).json({
      message: error.message,
    });
  });

  // backend server
  const http_server: http.Server = http.createServer(app);

  const PORT: any = process.env.PORT ?? 1212;

  http_server.listen(PORT, function () {
    console.log(
      `Location Care Backend is listening at PORT = ${PORT}\nURI: http://localhost:1212/`
    );
  });
})();
