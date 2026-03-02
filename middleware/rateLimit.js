const rateLimit = require("express-rate-limit");


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // public API limit
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    const retryAfter = Math.ceil(
      (req.rateLimit.resetTime - Date.now()) / 1000
    );

    res.status(429).json({
      message: "Too many requests, please wait before retrying.",
      retryAfterSeconds: retryAfter,
    });
  },
});

module.exports = apiLimiter;
