const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");

//routes
const taskRoutes = require("./Routes/taskRoutes");
const connectDB = require("./db/database");

app.use(express.json());

//connect DB
connectDB(process.env.MONGO_URI);

app.use("/api", taskRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running at port ${port}...`));
