//import Point from "../models/point.js"
import Construction from"../models/construction.js"

export const createConstruction =async(req,res)=>{
try {
    const construction= new Construction(req.body);
    await construction.save();
    res.status(201).send(construction);
} catch (error) {
    res.status(551).send(error);
}
};

export const getAllConstructions =async(req,res)=>{
    try {
        const allConstructions=await Construction.find({});
        //console.log('Point Arrray:',allpoints)
        res.status(200).send(allConstructions);
    } catch (error) {
        res.status(552).send(error);
    }
};

export const getSingleConstruction =async(req,res)=>{
   const {id} =req.params
    try {
        const singleConstruction=await Construction.findById(id);
    if(!singleConstruction) {return res.status(553).send("Construction not found");}
    else{res.status(200).send(singleConstruction);}
    } catch (error) {
        res.status(554).send(error);
    }
};

export const updateConstruction =async(req,res)=>{
    const {id} =req.params
    try {
    const updatedConstruction =await Construction.findByIdAndUpdate(id,{$set:req.body},{new:true});
        //res.status(200).json(updatedpoint);
    if(!updatedConstruction) {return res.status(555).send("Construction not found");}
    else{res.status(200).send(updatedConstruction);}
    } catch (error) {
        res.status(556).send(error);
    }
};

export const deleteConstruction =async(req,res)=>{
    const {id} =req.params
    try{
        //console.log("id:" ,id);
        //console.log("req.body:",req.body);
        const deletedConstruction=await Construction.findByIdAndDelete(id);
      /*  if(!deletedPoint){return res.status(507).send("point not found");}
        else{res.status(200).send("silme işlemi başarılı");}
    */ }
    catch (error) {
    res.status(557).send(error);
}
};



