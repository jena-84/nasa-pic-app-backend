import {pool} from '../index.js';
import data from '../../libs/data.js'

export async function populateTable(){
    for(let i = 0; i < data.length ; i++){
   const responce = await pool.query(`INSERT INTO images
                                      (date,explanation,hdurl,media_type,service_version,title,url,likes)
                                      VALUES
                                      ($1,$2,$3,$4,$5,$6,$7,$8)
                                      RETURNING*;`
                                      ,[data[i].date, data[i].explanation,data[i].hdurl,data[i].media_type,data[i].service_version,data[i].title,data[i].url, data[i].likes])
                                      console.log(responce.rows[0], "inserted")

                                    }
    
      };

populateTable();