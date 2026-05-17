const express = require("express");
const scrapeWebsite = require("../services/scraper");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, company, website } = req.body;

    if (!name || !email || !company || !website) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const scrapedData = await scrapeWebsite(website);

    console.log(scrapedData);

    res.status(200).json({
      message: "Lead submitted successfully",
      scrapedData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;