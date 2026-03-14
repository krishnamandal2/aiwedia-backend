const BotReply = require("../models/BotReply");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    const text = message.toLowerCase();

    const botReplies = await BotReply.find();

    let reply =
      "I couldn't find AI tools for that. Try coding, image, video, writing or design.";

    for (const item of botReplies) {
      for (const keyword of item.keywords) {
        if (text.includes(keyword)) {
          reply = item.reply;
          break;
        }
      }
    }

    res.json({
      message,
      reply,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};