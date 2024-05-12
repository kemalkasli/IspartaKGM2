import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({

    kkn: { type: String, required: true, },
    km: {  type: String, required: true, },
    explain: {type: String, required: true, },
    location: { type: String },
    image: { type: String },
});

 const Point = mongoose.model('Point', pointSchema);
 
 export default Point;