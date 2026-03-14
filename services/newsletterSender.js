const Blog=require('../models/Blog')
const Newsletter = require("../models/newsletter.model");
const transporter = require("../config/mailer");

const sendWeeklyNewsletter = async () => {

  const subscribers = await Newsletter.find({ subscribed: true });

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .limit(5);

  let blogList = "";

  blogs.forEach(blog => {
    blogList += `
      <li>
        <a href="https://aiwedia.com/blog/${blog.slug}">
          ${blog.title}
        </a>
      </li>
    `;
  });

  for (const user of subscribers) {
    await transporter.sendMail({
      from: `"AIWedia" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "AIWedia Weekly AI Tools & Tech Updates",
      html: `
        <h2>This Week on AIWedia</h2>

        <ul>
          ${blogList}
        </ul>

        <a href="https://aiwedia.com">
          Visit AIWedia
        </a>
      `,
    });
  }
};