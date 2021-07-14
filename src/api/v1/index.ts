import * as express from "express";
import user from "./user.index";
// const router = express.Router();
let router: express.Router = express.Router();

router.use("/user", user);

export default router;
