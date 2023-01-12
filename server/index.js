
import "dotenv/config";
import cloudinary from '../utils/cloudinary.js';
import express from 'express';
import images from '../routes/images.js';

const app = express();

app.use(express.json({limit:'50mb'}));// allow to parse json body data and set limit to higher limit for bigger images
app.use(express.urlencoded({limit:'50mb',extended: true}))//accept data from forms

app.get("/", (req,res)=>{
    res.json("server is woring :)")
 });

 app.get('/uploaded', async(req,res)=>{//add name(Test) of the folder in properties
    const {resources} = await cloudinary.v2.search.expression('folder:Test').sort_by('public_id','desc').max_results(30).execute();
    const publicIds = resources.map((file) => file.public_id)
    console.log(publicIds)
    res.send(publicIds)
 });

 app.post('/api/upload', async(req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset: 'qrtsz1jb' 
       });
        console.log(uploadResponse)
        res.json({ msg: 'yaya' });
     }catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
 });
app.use('/images' , images)

const PORT =  3001
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
 });
