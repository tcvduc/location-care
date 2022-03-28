import express from "express";
import axios from "axios";
const app = express();

const PORT = process.env.PORT ?? 1313;

// app.use("/", function (req, res) {
//   res.json({
//     message: "Virtual origin server",
//   });
// });

app.get(
  "/request-to-origin-http://localhost:1212-method-get",
  function (req, res) {
    const uri = "http://localhost:1212";
    const config = {};

    axios.get(uri, config).then(function (ret) {
      console.log(ret);
      res.json({
        ret: ret.data,
      });
    });
  }
);

app.get(
  "/request-to-origin-http://localhost:1212-method-options",
  function (req, res) {
    const uri = "http://localhost:1212";
    const config = {};

    axios.options(uri, config).then(function (ret) {
      console.log(ret);
      res.json({
        ret: ret.data,
      });
    });
  }
);

app.listen(PORT, function () {
  console.log(
    `Virtual origin server is listening at port = ${PORT}\nURI = http://localhost:${PORT}`
  );
});
