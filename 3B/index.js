const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const loginRouter = require("./routes/user_login");
const registerRouter = require("./routes/user_registration");
const profileRouter = require("./routes/user_get");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/user", loginRouter);
app.use("/user", registerRouter);
app.use("/user", profileRouter);

mongoose
  .connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
