

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlist"; 
// ⚠️ Make sure DB name matches app.js exactly

main().then(()=>{
    console.log("Connected to DB"); //opens a connection to our database
}).catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj,owner: "696f2844b854bd3657154fff"}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

