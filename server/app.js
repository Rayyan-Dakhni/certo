const express = require("express");

const cors = require("cors");

const app = express();

const con = require("./config/database");

const ownerAuthRoute = require("./routes/owner");
const authRouter = require("./routes/auth/auth");
const vehiclesRouter = require("./routes/vehicles");
const addOnsRouter = require("./routes/addOns");

app.use(cors());

app.use(express.json());

app.use("/owner", ownerAuthRoute);
app.use("/auth", authRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/addOns", addOnsRouter);

app.use("/images/", express.static("./uploads"));

con.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

app.use((req, res, next) => {
  res.status(404).send({
    error: "Bad Request",
  });
});

app.listen(5000, () => {
  console.log("server running");
});
