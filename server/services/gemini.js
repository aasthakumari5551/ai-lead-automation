require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const generateAuditReport = async (companyData) => {
  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert business consultant who generates professional business audit reports.",
        },
        {
          role: "user",
          content: `
Analyze this company data and generate a professional audit report.

Company Data:
${JSON.stringify(companyData)}

Include:
1. Company Overview
2. Strengths
3. Weaknesses
4. SEO Recommendations
5. AI Automation Opportunities
6. Final Recommendations
`,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("OpenRouter Error:", error.message);

    return `
AI report generation is temporarily unavailable.
`;
  }
};

module.exports = generateAuditReport;