import {pool} from '../../db/index.js';

export async function dropTable(){
  const responce = await pool.query(`DROP TABLE images;`)
  console.log("Table Dropped")
}
dropTable()