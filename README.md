# 🚀 DailyFinance Automation with Playwright

![Playwright](https://img.shields.io/badge/Playwright-Testing-brightgreen?logo=playwright\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-blue?logo=node.js\&logoColor=white)
![Allure Reports](https://img.shields.io/badge/Allure-Reports-orange?logo=allure\&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-Reports-yellowgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Status](https://img.shields.io/badge/Project-Active-brightgreen)

---

## 📝 Project Overview

This project automates end-to-end testing of the [DailyFinance Web Application](https://dailyfinance.roadtocareer.net/) using **Playwright JS**. It ensures critical functionalities are working as expected, with robust validation, error handling, and reporting.

## ✅ Features Covered

* User Registration with email confirmation & toast validation
* Login functionality and adding items to the list
* Profile photo upload & logout process
* Password reset workflow & successful re-login
* Negative test cases for improper inputs & error scenarios

## 🛠 Prerequisites

Ensure you have the following installed:

* [Node.js (LTS Version)](https://nodejs.org/)
* [Playwright](https://playwright.dev/)
* Git

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## 🚦 Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run with Allure Report

```bash
npx playwright test --reporter=line,allure
allure serve allure-results
```

### Run with Mochawesome Report

```bash
npx playwright test --reporter=mochawesome
```

### Run a Specific Test File

```bash
npx playwright test tests/<test-file-name>.spec.js
```

## 🧪 Test Artifacts & Documentation

### 📊 Negative Test Cases

[Google Spreadsheet - Negative Test Cases](https://docs.google.com/spreadsheets/d/1SkiV88A4o2Q4NGAS04jId0_KXcAE2X6Ay8GObTUZSYg/edit?usp=sharing)

### 🎬 Automation Process Recording

https://github.com/user-attachments/assets/1760f32e-bf2c-4307-812e-6e8f76beff70

https://github.com/user-attachments/assets/954669d5-c66e-4d94-8023-2341ae5e827f

### 🖼 Screenshots & Reports

![Test Execution Screenshot 1](https://github.com/user-attachments/assets/f031b863-4d54-4087-9e9c-4599f1873dc3)
![Test Execution Screenshot 2](https://github.com/user-attachments/assets/8828f3eb-9adc-42d6-8c3e-a2667fb47362)
![Test Execution Screenshot 3](https://github.com/user-attachments/assets/cb55cd9e-189b-4ddd-b9d1-ba3c4d6fe3ba)

## 📂 Project Highlights

* ✅ Full E2E automation with Playwright
* 🛡 Negative testing for robustness
* 📝 Assertions for UI elements & backend responses
* 📊 Allure & Mochawesome integrated reporting
* 📹 Recorded automation workflow for reference
* 🗄 Optimized project structure with clean `.gitignore`

## 🤝 Contribution & Support

This repository is maintained for learning, testing, and automation purposes.
Feel free to **fork**, **star**, **raise issues**, or contribute enhancements!
