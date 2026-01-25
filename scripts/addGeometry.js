require('dotenv').config();
const mongoose = require('mongoose');
const Listing = require('../models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const dbUrl= process.env.ATLASDB_URL;
const mapToken= process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({ accessToken:mapToken });

console.log("DB_URL =", process.env.dbUrl);

mongoose.connect(process.env.ATLASDB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));



async function fixListings() {
  const listings = await Listing.find({ geometry: { $exists: false } });

  for (let listing of listings) {
    if (!listing.location) continue;

    const response = await geocodingClient.forwardGeocode({
      query: listing.location,
      limit: 1
    }).send();

    if (response.body.features.length) {
      listing.geometry = response.body.features[0].geometry;
      await listing.save();
      console.log(`✔ Updated ${listing.title}`);
    }
  }

  mongoose.connection.close();
}

fixListings();
