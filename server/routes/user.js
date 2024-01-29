import express from "express";
const router = express.Router();

import { signup, signin, googleSignIn } from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googleSignIn", googleSignIn);

// post API using router library

export default router;
