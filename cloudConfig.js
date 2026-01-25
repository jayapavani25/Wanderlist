
// we use this in routes/listing.js

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// we pass the configuration details i.e. configuring means to combine 
// to combine backend with cloudinary account
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// used to specify in which folder the files need to be stored
const storage = new CloudinaryStorage({
  cloudinary:cloudinary,
  params: {
    folder: 'wanderlist_DEV',
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

module.exports={
    cloudinary,
    storage,
};