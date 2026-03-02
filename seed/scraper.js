// scraper.js
const puppeteer = require("puppeteer");

const scrapeToolsFromPage = async (url) => {
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });

    await page.waitForSelector("a", { timeout: 8000 }).catch(() =>
      console.warn(`No anchor tags found at ${url}`)
    );

    const data = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a"))
        .filter((a) => {
          const text = a.innerText.trim();
          if (!text || text.length < 10) return false;
          const blacklist = ["skip to content", "read more", "home", "contact"];
          return !blacklist.some((b) => text.toLowerCase().includes(b));
        })
        .slice(0, 12)
        .map((a) => ({
          name: a.innerText.replace(/\s+/g, " ").trim(),
          url: a.href,
          description: "Auto scraped content",
        }))
    );

    return data;
  } catch (err) {
    console.error(`Scraping failed for ${url}:`, err.message);
    return [];
  } finally {
    await browser.close();
  }
};

module.exports = scrapeToolsFromPage;
