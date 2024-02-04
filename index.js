const express = require("express");
const colors = require("colors");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");
const userroute = require("./routes/UserRoutes")
const Port = 8080;
dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/user",userroute)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB".bgGreen.white);
  })
  .catch((error) => {
    console.error(" Error connecting to MongoDB: ".bgRed.white, error);
  });
app.listen(Port, () => {
  console.log(` Server is connected to port ${Port} `.bgWhite.black);
});
