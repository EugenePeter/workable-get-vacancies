import express from "express";
import dotenv from "dotenv";
import { initializeApolloServer } from "./graph";
import indexRouter from "./routes";
import cors from "cors";

import mongoose from "mongoose";
dotenv.config();

const { CONNECTIONSTRING } =
  process.env ||
  "mongodb+srv://workableVacancies:200800462@cluster0.khdnm.mongodb.net/workable-vacancies?retryWrites=true&w=majority";

const startServer = async () => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: false,
  };
  app.use(cors(corsOptions));
  app.use("/", indexRouter);
  app.get("/", (req, res) => {
    res.send("welcome");
  });

  app.get("/user-email", (req, res) => {
    res.send("welcome");
  });

  try {
    //@ts-ignore
    await mongoose.connect(CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO MONGODB");
    await initializeApolloServer(app);
    app.listen(process.env.PORT, () => {
      console.log(`apps is running on PORT: ${process.env.PORT}`);
    });
  } catch (e) {
    console.log("error:", e);
  }
};

startServer();
