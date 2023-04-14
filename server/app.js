import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blog", blogRouter);

app.use("/api/user", router);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://samarthbagga:samarth@cluster0.ovfz96f.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log("server is running");
    })
  )
  .then(() => console.log(PORT))
  .catch((err) => console.log(err));
