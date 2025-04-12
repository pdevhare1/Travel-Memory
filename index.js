const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const conn = require("./conn"); // Your DB connection

app.use(express.json());
app.use(cors());

const tripRoutes = require("./routes/trip.routes");
app.use("/trip", tripRoutes); // e.g., POST/GET on /trip

// 🔁 Health check route
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// Optional test route
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});
