# AI Lead Automation System

An AI-powered lead intake and business audit automation platform built using React, Node.js, OpenRouter AI, Puppeteer, and Google Sheets API.

---

# Features

* Lead intake form
* Website scraping & company enrichment
* AI-generated business audit reports
* Professional PDF report generation
* Automated email delivery
* Google Sheets lead logging
* Error handling & fallback support

---

# Tech Stack

## Frontend

* React.js

## Backend

* Node.js
* Express.js

## AI Integration

* OpenRouter API

## Web Scraping

* Axios
* Cheerio

## PDF Generation

* Puppeteer

## Email Automation

* Nodemailer

## CRM Logging

* Google Sheets API

---

# Workflow

Lead Form Submission
↓
Website Scraping
↓
AI Audit Generation
↓
PDF Report Generation
↓
Email Delivery
↓
Google Sheets Logging

---

# Project Structure

```bash
client/
server/
  ├── routes/
  ├── services/
  ├── reports/
  ├── credentials.json
  ├── .env
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <https://github.com/aasthakumari5551/ai-lead-automation>
```

---

## Frontend Setup

```bash
cd client
npm install
npm start
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

Create `.env` inside the server folder:

```env
OPENROUTER_API_KEY=

EMAIL_USER=

EMAIL_PASS=
```

---

# Google Sheets Setup

1. Create Google Cloud Project
2. Enable Google Sheets API
3. Create Service Account
4. Download `credentials.json`
5. Share Google Sheet access with service account email

---

# Future Improvements

* Better UI/UX
* Advanced AI prompts
* CRM integration
* Database storage
* User authentication
* AI caching system
* Deployment support

---

# Author

Aastha Kumari
