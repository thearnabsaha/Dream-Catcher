import { Router } from "express";
import { UserSignIn, UserSignUp } from "../controllers/user.controller";

const router = Router();

router.post("/signup", UserSignUp);
router.post("/signin", UserSignIn);
// router.get("/signup", jwtAuth, getUser);

export default router;