const mongoose = require('./core')

const xferStationSchema = new mongoose.Schema({
  userEmail: String,
  data: [{
    // key: String, // index
    text: String,
    labels: [{
      start: Number,
      end: Number,
      label: String
    }]
  }]
})

module.exports = mongoose.model("xferStation", xferStationSchema, 'xferStations')