import express from "express";
import cors from "cors";
import { userRoutes, groupRoutes } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/group", groupRoutes);

export default app;
