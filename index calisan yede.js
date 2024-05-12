import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dontenv from 'dotenv';
import router from "./routes/pointRoutes.js";
import router2
 from "./routes/constructiontRoutes.js";
dontenv.config();
const app = express();
app.use(cors());


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use("/",router);
app.use("/cons",router2);

mongoose.set({ strictQuery: false })
mongoose.connect(process.env.DB_CONNECTION_STRING,{
      dbName:"point_db",
      useNewUrlParser:true,
      useUnifiedTopology:true,

})
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

  
  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));