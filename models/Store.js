// Store Schema
const mongoose = require('mongoose');
const geocoder = require('../utilities/geocoder')

const StoreSchema = new mongoose.Schema ({
     storeId: {
        type: String,
        require: [true, 'Please add a store ID'],
        maxlength: [10, "Store ID must be less than 10 characters"],
        unique: true,
        trim: true
    },
    address: {
        type: String,
        require: [true, 'Please add an address']
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }, 
        formartedAddress: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
  }
})

// Geocode, create and save location
StoreSchema.pre('save', async function(next){
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'points', 
    coordinates: [loc[0].longitude, loc[0].latitude], 
    formartedAddress: loc[0].formattedAddress
  }

  this.address = undefined;
  next()
})

module.exports = mongoose.model('Store', StoreSchema)