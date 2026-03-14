require("dotenv").config(); 

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const connectDB = require("./config/db.js");


const categoryRoutes = require("./routes/categoryRoutes.js");
const searchRoutes = require("./routes/search.routes");
const authRoutes = require("./routes/authRoutes.js");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes")
const chatRoutes=require("./routes/chatRoutes.js")
const newsletterRoutes = require("./routes/newsletter.routes");

//ratelimit
const apiLimiter = require("./middleware/rateLimit.js");
const authLimiter=require("./middleware/authlimit.js")

connectDB();

require("./cron/newsletterCron");

const app = express();

app.use(helmet());



app.use(express.json());
app.use(cookieParser());


app.use(
  cors({
       origin: ["http://localhost:3000", "https://aiwedia.com"],
    credentials: true,
  })
);


app.use("/api/categories",apiLimiter, categoryRoutes);
app.use("/api/search", apiLimiter,searchRoutes);
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", chatRoutes,apiLimiter);
app.use("/api",apiLimiter,newsletterRoutes)


app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    msg: "Server is running properly in Ai Wedia",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: Date.now()
  });
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
