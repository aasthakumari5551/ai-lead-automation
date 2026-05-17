const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",

  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const appendToSheet = async (
  name,
  email,
  company,
  website,
  status
) => {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1BUF26niW9u6CzsaDZenb8t6BUWixnqpIuX2C8dk37NE",

      range: "Sheet1!A:F",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            name,
            email,
            company,
            website,
            status,
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    console.log("Lead added to Google Sheets");
  } catch (error) {
    console.log("Sheets Error:", error.message);
  }
};

module.exports = appendToSheet;