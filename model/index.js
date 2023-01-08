import { pool} from '../db/index.js';

export async function getAllImages(){
    const res = await pool.query(`SELECT * FROM images;`);
    return res.rows;
}

// export async function downloadImage(newImage){
//     const res = await pool.query(`INSERT INTO images
//                                 (date,explanation,hdurl,media_type,service_version,title,url,likes)
//                                  VALUES
//                                 ($1,$2,$3,$4,$5,$6,$7,$8)
//                                 RETURNING*;`
//                                ,[newImage.date, newImage.explanation, newImage.hdurl, newImage.media_type, newImage.service_version, newImage.title,newImage.url,newImage.likes])
         
//      console.log("new image added")
//      return res.rows;
//     };

export async function updateLikes(id, updatedData){
    const res = await pool.query(`UPDATE images
                                  SET 
                                  likes = $1
                                  WHERE
                                  image_id =$2
                                  RETURNING*;`
                                  ,[updatedData.likes,id])
    console.log("Image Updated")
    return res.rows;
    };


