const axios = require("axios");
const cheerio = require("cheerio");

const scrapeWebsite = async (url) => {
  try {
   const { data } = await axios.get(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    Referer: "https://www.google.com/",
    DNT: "1",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": "1",
  },
});

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription = $('meta[name="description"]').attr("content");

    const headings = [];

    $("h1, h2").each((i, el) => {
      headings.push($(el).text().trim());
    });

    const paragraphs = [];

    $("p").each((i, el) => {
      const text = $(el).text().trim();

      if (text.length > 50) {
        paragraphs.push(text);
      }
    });

    return {
      title,
      metaDescription,
      headings: headings.slice(0, 10),
      content: paragraphs.slice(0, 10).join(" "),
    };
  } catch (error) {
    console.log("Scraping Error:", error.message);

    return {
  title: "Website Analysis Limited",
  metaDescription:
    "Could not fully access website content due to scraping restrictions.",
  headings: [],
  content:
    "Limited website data available for analysis.",
};
  }
};

module.exports = scrapeWebsite;