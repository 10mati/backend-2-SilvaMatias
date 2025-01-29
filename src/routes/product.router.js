import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
import { passportCall } from "../passport/passportCall.js";

const router = Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", passportCall('jwt'), productController.create);
router.put("/:id", passportCall('jwt'), productController.update);
router.delete("/:id", passportCall('jwt'), productController.delete);

export default router;
