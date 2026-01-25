
//do the model and export schema and use the exported schema in app.js
const mongoose=require("mongoose");  //need this to work with mongodb in node.js
const Schema = mongoose.Schema;
const Review=require("./review.js");

const listingSchema= new Schema({
    title: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required: true,
    },
    image:{
            url:String,
            filename:String
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    }
});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if (listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing; 







