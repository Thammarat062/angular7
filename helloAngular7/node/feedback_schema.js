
var mongoose = require('mongoose');

var FeedbackSchema = mongoose.Schema({
 username: {type: String, required: true},
 feedback: {type: String, required: true}
});

var FeedbackModel = mongoose.model('feedback', FeedbackSchema);
module.exports = FeedbackModel;