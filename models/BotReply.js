const mongoose = require("mongoose");

const botReplySchema = new mongoose.Schema({
  keywords: [String],
  reply: String
});

module.exports = mongoose.model("BotReply", botReplySchema);