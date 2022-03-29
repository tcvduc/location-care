import express from "express";
import axios from "axios";
import http from "http";

const app = express();

const PORT = process.env.PORT ?? 1313;

// app.use("/", function (req, res) {
//   res.json({
//     message: "Virtual origin server",
//   });
// });
function virtualBulkServerRequest() {
  for (let i = 6500; i >= 3307; --i) {
    const server_index_options: http.ServerOptions = {};

    // const requestListener: http.RequestListener = {};

    const server_index = http.createServer(server_index_options);
    const port = i;

    const options = {
      host: "http://localhost:1212/",
      port: 8070,
      path: "/",
      method: "get",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Length": Buffer.byteLength(data),
      },
    };

    axios.get("http://localhost:1212/", {}).then((ret) => {
      console.log(ret.data);
    });

    console.log(`request ${i}`);

    server_index.listen(port, () => {
      console.log(`Server ${i} is listening at port: ${port}`);
    });
  }
}

app.get(
  "/request-to-origin-http://localhost:1212-method-get",
  function (req, res) {
    const uri = "http://localhost:1212";
    const config = {};

    axios.get(uri, config).then(function (ret) {
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
