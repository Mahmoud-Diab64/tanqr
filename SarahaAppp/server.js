require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/auth.routes");
const messageroutess = require("./routes/message.route");

const app = express();

connectDB();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", routes);
app.use("/api/messages", messageroutess);

const port = 3000;

app.listen(port, () => {
  console.log(`server is run on port ${port}`);
});
// ngrok http 3000