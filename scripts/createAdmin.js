require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/admin");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  const hashedPassword = await bcrypt.hash("123", 10);

  const admin = await User.create({
    email: "admin@gmail.com",
    password: hashedPassword,
    isAdmin: true,
  });

  console.log("Admin created:", admin.email);
  process.exit();
})();
