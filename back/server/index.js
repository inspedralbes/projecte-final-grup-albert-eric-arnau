import express from "express";
import cors from "cors";
import { userRoutes, groupRoutes } from "./routes/index.js";

const app = express();

app.use(
  cors({
    // TODO: esto de aqui se cambia
    // origin: "http://groupem.alumnes.inspedralbes.cat",
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(express.json());

app.use("/user", userRoutes);
app.use("/group", groupRoutes);

export default app;
