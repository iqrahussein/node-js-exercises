const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const postRoute = require("./routes/post");
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");
// app.get('/',(req,res)=>{
//   res.send("hello iqra")
// })
app.use("/users", userRoutes);

app.use("/posts", postRoute);

app.use(
  cors({
    origin: [""],
  }),
);

app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected locally'");
  })
  .catch((err) => {
    console.log("❌ Connection error:", err);
  });
app.listen(PORT, () => {
  console.log(`server running on port${PORT}`);
});
