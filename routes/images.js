import express from "express";
const router = express.Router();

import {getAllImages,downloadImage,updateLikes} from '../model/index.js';

router.get("/", async(req,res)=>{
    const result = await getAllImages()
    return res.json({
        success: true,
        payload: result
    })
});

router.post("/", async(req,res)=>{
     const body = req.body;
     const result = await downloadImage(body);
     return res.json({
        success: true,
        payload: result
     })  
});

router.put("/:id", async(req,res)=>{
    const id= NUMBER(req.params.id)
    const body = req.body;
    const result = await updateLikes(id,body);
    return res.json({
        success: true,
        payload: result
    })
});


export default router;