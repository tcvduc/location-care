import express, { Express, Request, Response, NextFunction } from "express";
import stuffNeedToDoRouter from "./routers/stuffNeedToDo.route";
import originsRouter from "./routers/origins.route";
import slashRouter from "./routers/slash.route";
import http from "http";
import db from "./config/database.config";
import originsModel from "./models/origins.model";
import cors from "cors";

(() => {
  let allowOriginList = ["http://example1.com"];

  let app: Express = express();

  // CORS
  const corsOptions: cors.CorsOptions = {
    origin: allowOriginList,
    allowedHeaders: ["dasd"],
  };

  app.use(cors(corsOptions));

  // parse the request
  app.use(express.urlencoded({ extended: false }));

  // parse json data
  app.use(express.json());

  // API Cors Rule
  // app.use(function (req: Request, res: Response, next: NextFunction) {
  //   // set the CORS policy

  //   // Allow all origins/domain/uri access api/resources
  //   // res.header("Access-Control-Allow-Origin", "*");

  //   // Allow only https://www.twilio.com access our api/resouces
  //   // res.header("Access-Control-Allow-Origin", "https://twilio.com");

  //   // Allow https://www.twilio.com, https://google.com access api/resouces
  //   res.header("Access-Control-Allow-Origin", [
  //     "https://www.twilio.com",
  //     "https://www.google.com",
  //   ]);

  //   // set the cors headers
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "origin, X-Requested-With,Content-Type,Accept,Authorization"
  //   );
  //   res.header("allow", "GET PATCH DELETE POST");
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
  app.use("/api/origins", originsRouter);

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
