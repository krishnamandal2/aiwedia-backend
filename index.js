const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const searchRoutes = require("./routes/search.routes");
const authRoutes = require("./routes/authRoutes.js");
const apiLimiter = require("./middleware/rateLimit.js");
const authLimiter=require("./middleware/authlimit.js")
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes")

dotenv.config();
connectDB();

const app = express();




app.use(helmet());

// 2️⃣ Body parser

app.use(express.json());
app.use(cookieParser());


app.use(
  cors({
    origin: ["http://localhost:3000","https://aiwedia.com"],
    credentials: true,               
  })
);





app.use("/api/categories",apiLimiter, categoryRoutes);
app.use("/api/search", apiLimiter,searchRoutes);
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.get('/', (req,res)=>{
  return res.status(200).json({
    success: true,
    health: "healthy",
    message: "Welcome to AIWEDIA backend."
  })
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
