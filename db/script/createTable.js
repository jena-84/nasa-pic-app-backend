import {pool} from '../index.js';

export async function createTable(){
  const responce = await pool.query(`CREATE TABLE IF NOT EXISTS images(
                image_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
                date DATE, 
                explanation TEXT,
                hdurl TEXT,
                media_type TEXT,
                service_version TEXT,
                title TEXT,
                url TEXT,
                likes INT);`
                )
  console.log("table created:" , responce.rows[0])
}
createTable();