import express from "express";
import Swagger from "swagger-ui-express";

import fileSwagger from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", Swagger.serve, Swagger.setup(fileSwagger));

app.use("/users", usersRoutes);

export { app };
