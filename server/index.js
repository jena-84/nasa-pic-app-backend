
import "dotenv/config";
import express from 'express';
import cloudinary from '../utils/cloudinary.js';
import images from '../routes/images.js';

const app = express();

app.use(express.json({limit:'50mb'}));// allow to parse json body data and set limit to higher limit for bigger images
app.use(express.urlencoded({limit:'50mb',extended: true}))//accept data from forms

app.get("/", (req,res)=>{
    res.json("server is woring :)")
 });

app.post('/',async(req,res)=>{
    try {
        const fileStr = req.body.data;
        const uploadedResponce = await cloudinary.v2.uploader.upload(fileStr, 
                                         {upload_preset: "ml_default"})
        console.log(uploadedResponce) 
        res.json({msg:"Doneeee"})                 
       }catch (error) {
         res.status(500).json({err:'Something went wrong'})  
       }
});


app.use('/images' , images)

const PORT =  3001
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
 });
