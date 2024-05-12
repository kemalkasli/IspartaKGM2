import express from "express";
import  {getAllPoints,getSinglePoint,createPoint,updatePoint,deletePoint} from "../controllers/pointController.js";

const router =express.Router();

router.get("/",getAllPoints);
router.get("/:id",getSinglePoint);
router.post("/",createPoint);
router.put("/:id",updatePoint);
router.delete("/:id",deletePoint);


export default router;