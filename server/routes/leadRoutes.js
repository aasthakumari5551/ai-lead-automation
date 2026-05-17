const express = require("express");
const scrapeWebsite = require("../services/scraper");
const generateAuditReport = require("../services/gemini");
const generatePDF = require("../services/pdf");
const sendEmail = require("../services/mail");
const appendToSheet = require("../services/sheets");

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

    const aiReport = await generateAuditReport(scrapedData);

    const pdfPath = await generatePDF(company, aiReport);

    await sendEmail(email, company, pdfPath);

    await appendToSheet(
  name,
  email,
  company,
  website,
  "Report Sent"
);

    console.log("PDF Generated:", pdfPath);

    console.log(aiReport);

    console.log(scrapedData);

    res.status(200).json({
  message: "Lead submitted successfully",
  aiReport,
  pdfPath,
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;