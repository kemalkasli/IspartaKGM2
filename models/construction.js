import mongoose from "mongoose";
const constructionSchema = new mongoose.Schema({

    
    tarih: { type: String},
    talep_no: { type: String },
    sube_no: { type: String },
    bolge_no: { type: String },
    kkn: { type: String, required: true, },
    km: {  type: String, required: true, },
    tur: { type: String},
    sahip: {type: String, required: true, },
    durum: { type: String }
});

 const Construction = mongoose.model('Construction', constructionSchema);
 
 export default Construction;