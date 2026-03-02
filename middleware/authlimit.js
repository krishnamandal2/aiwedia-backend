const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // strict for auth
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // only count failures
  handler: (req, res) => {
    const retryAfter = Math.ceil(
      (req.rateLimit.resetTime - Date.now()) / 1000
    );

    res.status(429).json({
      message: "Too many auth attempts. Please try again later.",
      retryAfterSeconds: retryAfter,
    });
  },
});

module.exports = authLimiter;
