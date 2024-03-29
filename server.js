const path = require("path");
const express = require("express");
const router = express.Router();
const request = require("request");
const cors = require("cors");

const app = express();

require("dotenv").config({
  path: path.resolve(__dirname, "config", ".env"),
});
app.use(cors());
app.use(express.urlencoded({ extended: true }));

router.post("/run", cors(), (req, res) => {
  const program = {
    script: req.body.code,
    language: req.body.language,
    stdin: req.body.input,
    versionIndex: "0",
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program,
    },
    function (error, response, body) {
      res.send(body);
    }
  );
});

app.use(router);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
