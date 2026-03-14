const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema(
{
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  unsubscribeToken: {
    type: String,
    required: true,
    unique: true,
  },

  subscribed: {
    type: Boolean,
    default: true
  },

  unsubscribedAt: {
    type: Date,
    default: null
  }

},
{ timestamps: true }
);

module.exports =
  mongoose.models.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);