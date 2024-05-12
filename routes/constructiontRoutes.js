import express from "express";
import { getAllConstructions,getSingleConstruction,createConstruction,updateConstruction,deleteConstruction } from "../controllers/constructionController.js";


const router2 =express.Router();

router2.get("/",getAllConstructions);
router2.get("/:id",getSingleConstruction);
router2.post("/",createConstruction);
router2.put("/:id",updateConstruction);
router2.delete("/:id",deleteConstruction);


export default router2;