import express from "express";
import db from "../db/conn.js"
const userRoute = express.Router();

userRoute.get("/", async(req, res) => {
    const collection = db.collection("users")
    const result = await collection.find({}).limit(10).toArray();
    res.status(200).json(result);
  res.send("hello to the users route");
});
export default userRoute;
