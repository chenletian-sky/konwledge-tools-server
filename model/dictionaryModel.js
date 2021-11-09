const mongoose = require('./core')

const dictionarySchema = new mongoose.Schema({
  userEmail: String,
  data: [{
    name: String,
    label: String,
    key: String, // index
    abbreviations: [String] // 别名
  }]
})

module.exports = mongoose.model("Dictionary", dictionarySchema, 'dictionaries')