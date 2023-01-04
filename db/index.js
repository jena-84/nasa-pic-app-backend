
import pg from 'pg';

if(process.env.DATABASE_URI == undefined){
  console.log("Url not found")
}
 export const pool = new pg.Pool({
    connectionString : process.env.DATABASE_URI,
    ssl:{ rejectUnauthorized: false}
   });

 

   
// export function query(text,params,callback){
//     return pool.query(text,params,callback);
//   };
