

import Point from "../models/point.js"


export const createPoint =async(req,res)=>{
try {
    const point= new Point(req.body);
    await point.save();
    res.status(201).send(point);
} catch (error) {
    res.status(501).send(error);
}
};

export const getAllPoints =async(req,res)=>{
    try {
        const allpoints=await Point.find({});
        //console.log('Point Arrray:',allpoints)
        res.status(200).send(allpoints);
    } catch (error) {
        res.status(502).send(error);
    }
};

export const getSinglePoint =async(req,res)=>{
   const {id} =req.params
    try {
        const singlepoint=await Point.findById(id);
    if(!singlepoint) {return res.status(503).send("point not found");}
    else{res.status(200).send(singlepoint);}
    } catch (error) {
        res.status(504).send(error);
    }
};

export const updatePoint =async(req,res)=>{
    const {id} =req.params
    try {
    const updatedpoint =await Point.findByIdAndUpdate(id,{$set:req.body},{new:true});
        //res.status(200).json(updatedpoint);
    if(!updatedpoint) {return res.status(505).send("point not found");}
    else{res.status(200).send(updatedpoint);}
    } catch (error) {
        res.status(506).send(error);
    }
};

export const deletePoint =async(req,res)=>{
    const {id} =req.params
    try{
        console.log("id:" ,id);
        console.log("req.body:",req.body);
        const deletedpoint=await Point.findByIdAndDelete(id);
      /*  if(!deletedPoint){return res.status(507).send("point not found");}
        else{res.status(200).send("silme işlemi başarılı");}
    */ }
    catch (error) {
    res.status(508).send(error);
}
};



