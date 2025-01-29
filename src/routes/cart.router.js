import { Router } from "express";
import { cartController } from "../controllers/cart.controller.js";
import { passportCall } from "../passport/passportCall.js";

const router = Router();

router.post("/add", passportCall('jwt'), cartController.addToCart);
router.post("/:cid/purchase", passportCall('jwt'), cartController.purchase);

export default router;
