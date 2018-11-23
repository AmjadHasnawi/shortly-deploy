var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var linkScema = mongoose.schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number

})

var Link = mongoose.model('Link', linkScema);

linkScema.pre('save', function (next) {
  var schema = crypto.creatHash('sah1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;