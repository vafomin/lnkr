import Koa from "koa";
import config from "../config";
import error from "./middlewares/error";
import { routes, allowedMethods } from "./middlewares/routes";
const mongoose = require("mongoose");
const cors = require("@koa/cors");

const app = new Koa();

mongoose.Promise = global.Promise;
mongoose.connect(config.database.url);

app.use(cors());
app.use(error);
app.use(routes());
app.use(allowedMethods());

app.listen(config.server.port, () => {
  console.log(`Server started on port ${config.server.port}`);
});
