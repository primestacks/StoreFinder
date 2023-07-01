// Store Schema
const mongoose = require('mongoose');

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

module.exports = mongoose.model('Store', StoreSchema)