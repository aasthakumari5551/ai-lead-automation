require("dotenv").config();

const nodemailer = require("nodemailer");

const sendEmail = async (toEmail, companyName, pdfPath) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `${companyName} Business Audit Report`,
      text: `
Hello,

Please find attached your personalized business audit report.

Generated automatically using AI-powered analysis.

Regards,
AI Lead Automation System
      `,
      attachments: [
        {
          filename: `${companyName}_Report.pdf`,
          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email Error:", error.message);
  }
};

module.exports = sendEmail;