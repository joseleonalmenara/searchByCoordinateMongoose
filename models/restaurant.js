const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = Schema({
  id: Number,
  url: String,
  photos: [String],
  name: {$type: String, required: true},
  phone: String,
  web: String,
  category: String,
  price: {
    gt: Number,
    lt: Number
  },
  location: {
    region: String,
    city: String,
    addres: String,
    location: {
      type: {$type: String, default: 'Point'},
      coordinates: [Number]
  }
  },
  rank: {
    total: Number,
    reviews: Number,
    sites: Number,
    price: Number,
    ambience: Number,
    cooking: Number,
    service: Number
  },
  socialScore: [{
    site: {$type: String, required: true},
    url: String,
    reviews: Number,
    note: Number
  }],
  trends: [{
    pos: Number,
    of: Number,
    text: String
  }],
  dishes: [String],
  comments: [{
    text: String,
    author: String,
    date: Date,
    stars: Number,
    url: String
  }]
}, {typeKey: '$type'});

module.exports = mongoose.model('Restaurant', restaurantSchema);
