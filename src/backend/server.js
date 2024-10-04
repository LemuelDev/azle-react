const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./Routes/router"));

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server running to port: ${port}`);
});
