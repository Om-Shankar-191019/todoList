const dotenv = require("dotenv");
dotenv.config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//routes
const taskRoutes = require("./Routes/taskRoutes");
const connectDB = require("./db/database");
const notFound = require("./Middlewares/not-found");
const errorHandlerMiddleware = require("./Middlewares/error-handler");

app.use(express.json());

//connect DB
// connectDB(process.env.MONGO_URI);

app.use("/api", taskRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(port, () => console.log(`server is running at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

// const start = () => {
//   connectDB(process.env.MONGO_URI);
//   app.listen(port, () => console.log(`server is running at port ${port}...`));
// };

start();
