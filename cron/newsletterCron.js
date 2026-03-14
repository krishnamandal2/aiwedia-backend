const cron = require("node-cron");
const sendWeeklyNewsletter = require("../services/newsletterSender");

cron.schedule("0 10 * * 1", () => {
  console.log("Running weekly newsletter job...");
  sendWeeklyNewsletter();
});