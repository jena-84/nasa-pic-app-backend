import "dotenv/config";
import  cloudinary  from 'cloudinary' // ES6 this is the way that make cloudinary works 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

//module.exports = { cloudinary };
export default cloudinary// ES6






