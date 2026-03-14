const Newsletter = require("../models/newsletter.model");
const transporter = require("../config/mailer");
const { v4: uuidv4 } = require("uuid");

exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const exists = await Newsletter.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already subscribed",
      });
    }

    const token = uuidv4();

    const newUser = await Newsletter.create({
      email,
      unsubscribeToken: token,
    });

    const unsubscribeLink = `${process.env.FRONTEND_URL}/unsubscribe/${token}`;

   

   await transporter.sendMail({
  from: `"AIWedia AI Tools" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: " Welcome to AIWedia – Your Weekly AI & Tech Updates",

html: `

<div style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
<tr>
<td align="center">

<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;padding:40px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

<!-- Success badge -->
<tr>
<td align="center">
<span style="display:inline-block;background:#e8f5e9;color:#2e7d32;padding:8px 18px;border-radius:30px;font-size:13px;font-weight:600;margin-bottom:20px;">
✓ Successfully Subscribed
</span>
</td>
</tr>

<!-- Heading -->
<tr>
<td align="center">
<h1 style="margin:0;font-size:28px;color:#1a1a2c;font-weight:700;">
Welcome to <span style="color:#111827;">AIWedia</span>
</h1>
</td>
</tr>

<!-- Subtitle -->
<tr>
<td align="center">
<p style="font-size:16px;color:#4a5568;margin:14px 0 28px 0;line-height:1.6;">
We're excited to have you with us 
</p>
</td>
</tr>

<!-- Feature Box -->
<tr>
<td align="center">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border-radius:12px;padding:24px;">

<tr>
<td align="center" style="font-weight:600;font-size:18px;color:#1a1a2c;padding-bottom:16px;">
What you'll receive
</td>
</tr>

<tr>
<td style="font-size:15px;color:#2d3748;line-height:28px;text-align:center;">
🤖 Latest AI Tools<br>
📰 AI News & Trends<br>
✍️ Tech Blog Articles<br>
💻 Developer Tips & Resources
</td>
</tr>

<tr>
<td style="padding-top:16px;font-size:14px;color:#4a5568;text-align:center;">
⭐ Weekly digest delivered straight to your inbox
</td>
</tr>

</table>

</td>
</tr>

<!-- CTA Button -->
<tr>
<td align="center" style="padding-top:30px;padding-bottom:30px;">
<a href="https://aiwedia.com" target="_blank"
style="background:#111827;color:#ffffff;text-decoration:none;padding:14px 34px;border-radius:40px;font-size:16px;font-weight:600;display:inline-block;">
Explore AI Tools →
</a>
</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="border-top:1px solid #e5e7eb;padding-top:20px;">
<p style="font-size:14px;color:#6b7280;margin:0;">
Join thousands of AI enthusiasts and developers
</p>
</td>
</tr>

<tr>
<td align="center" style="padding-top:20px;">
<p style="font-size:13px;color:#6b7280;margin:0;">
You're receiving this email because you subscribed to AIWedia.
</p>

<p style="font-size:13px;color:#6b7280;margin:6px 0 0 0;">
Stay curious. Stay ahead with AI.
</p>
</td>
</tr>

<!-- Links -->
<tr>
<td align="center" style="padding-top:20px;font-size:12px;color:#9ca3af;">
<a href="${unsubscribeLink}" target="_blank" style="color:#6b7280;text-decoration:underline;">Unsubscribe</a>
&nbsp;•&nbsp;
<a href="https://aiwedia.com/privacy" target="_blank" style="color:#6b7280;text-decoration:underline;">Privacy Policy</a>
</td>
</tr>

</table>

<p style="color:#9ca3af;font-size:12px;margin-top:18px;">
© 2026 AIWedia. All rights reserved.
</p>

</td>
</tr>
</table>

</div>

`
  

});

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: newUser,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


//Unscubsribe ke liye


exports.unsubscribeNewsletter = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await Newsletter.findOne({
      unsubscribeToken: token
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid link"
      });
    }

    if (!user.subscribed) {
      return res.status(200).json({
        success: true,
        message: "Already unsubscribed"
      });
    }

    user.subscribed = false;
    user.unsubscribedAt = new Date();

    await user.save();

    res.status(200).json({
      success: true,
      message: "Unsubscribed successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};