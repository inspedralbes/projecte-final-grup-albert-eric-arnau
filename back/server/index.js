import express from "express";
import cors from "cors";

import { userRoutes, groupRoutes } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/group", groupRoutes);

// app.use(notFoundError);
// app.use(generalError);

export default app;

const keys = {
  createGroup: ["admin", "name", "description", "limit", "password"],
  joinGroup: ["userID", "groupID", "password"],
};

const CheckParameters = (data, keys) => {
  let responseKeys = Object.keys(data);
  return keys.every((checkKeys) => responseKeys.includes(checkKeys));
};

// // Create group
// router.post("/create-group", (req, res) => {
//   let data = req.body;
//   if (CheckParameters(data, keys.createGroup)) {
//     // si no funciona, hacer el JSON.parse(req.body);
//     SaveGroup(data);
//   } else {
//     res.send({
//       status: "error",
//       message: "Please provide correct parameters",
//     });
//   }
// });

// router.post("/join-group", (req, res) => {
//   let data = req.body;
//   if (CheckParameters(data, keys.joinGroup)) {
//     // si no funciona, hacer el JSON.parse(req.body);
//     JoinGroup(data);
//   } else {
//     res.send({
//       status: "error",
//       message: "Please provide correct parameters",
//     });
//   }
// });

// router.get("/group-info", (req, res) => {
//   console.log(req.body);
//   res.send("get group-info");
// });

// router.get("/joined-groups", (req, res) => {
//   console.log(req.body);
//   res.send("get joined-groups");
// });

// router.post("/leave-group", (req, res) => {
//   console.log(req.body);
//   res.send("post leave-group");
// });

// router.put("/update-group-info", (req, res) => {
//   console.log(req.body);
//   res.send("put update-group-info");
// });

// router.get("/user-fav-groups", (req, res) => {
//   console.log(req.body);
//   res.send("get user-fav-groups");
// });

// router.get("/user-info", (req, res) => {
//   console.log(req.body);
//   res.send("get user-info");
// });

// router.put("/user-info", (req, res) => {
//   console.log(req.body);
//   res.send("put user-info");
// });

// router.get("/messages", (req, res) => {
//   console.log(req.body);
//   res.send("get get-messages");
// });

// router.post("/save-message", (req, res) => {
//   console.log(req.body);
//   res.send("post save-message");
// });

// // TODO: funcion para hacer busqueda de grupos desde group-finder
// router.get("/group", (req, res) => {
//   console.log(req.body);
//   res.send("get group");
// });
