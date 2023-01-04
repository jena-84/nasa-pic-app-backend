
import "dotenv/config";
import express from 'express';
import images from '../routes/images.js'

const app = express();
const PORT =  3001
//const PORT = 3001;

app.use(express.json());

app.get("/", (req,res)=>{
    res.json("server is woring :)")
 });

app.use('/images' , images)


app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
 });
