import express, { Express, Request, Response, NextFunction } from "express";
import stuffNeedToDoRouter from "./routers/stuff-need-to-do.route";
import http from "http";

let app = express();

// parse the request
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

// API Rule
app.use(function (req: Request, res: Response, next: NextFunction) {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the cors headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept,Authorization"
  );
  // set the cors method headers
  if (req.method === "options") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({
      options_request_method: "options_request_method",
    });
  }

  next();
});

// routers
app.use("/", function (req: Request, res: Response) {
  console.log("alo");
  res.json({
    message: "alo",
  });
});
// app.use("/stuff-need-to-do", stuffNeedToDoRouter);

// Error handling

app.use(function (req: Request, res: Response, next: NextFunction) {
  const error = new Error("Not found!");
  return res.status(404).json({
    message: error.message,
  });
});

// backend server
const http_server = http.createServer(app);

const PORT: any = process.env.PORT ?? 1212;

http_server.listen(PORT, function () {
  console.log(`Location Care Backend is listening at PORT = ${PORT}`);
});
