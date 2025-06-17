import { Router } from "express";
import { UserSignUp } from "../controllers/user.controller";
// import { getUser } from "../controllers/user.controller";
// import { jwtAuth } from "../middlewares/jwtAuth";

const router = Router();

router.post("/signup", UserSignUp);
// router.get("/signup", jwtAuth, getUser);

export default router;