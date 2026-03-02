const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/admin");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !user.isAdmin) {
      return res.status(401).json({ message: "Invalid credentials form backend" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials backend" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

 res.cookie("token", token, {
  httpOnly: true,
  secure: false,          // localhost only
  sameSite: "lax",       // ✅ REQUIRED for cross-origin
  path: "/",              // ✅ REQUIRED

});



    res.json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({ message: "Logged out" });
});

// Add this to your admin routes
router.get("/verify", (req, res) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(401).json({ message: "Not an admin" });
    }
    res.json({ valid: true, user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});


module.exports = router;
