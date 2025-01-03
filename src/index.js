// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: "./env",
});

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!", err);
  });
