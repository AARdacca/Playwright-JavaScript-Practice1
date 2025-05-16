# Playwright Automation - DailyFinance

## Project Description
This project automates the testing of the [DailyFinance](https://dailyfinance.roadtocareer.net/) web application using Playwright JS. The test suite covers the following functionalities:
- User registration and validation of confirmation email & toast message
- Login and adding two random items to the list
- Profile photo upload and logout
- Password reset process and successful login validation

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [Playwright](https://playwright.dev/)
- Git

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-link>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## What I Have Done
- Implemented Playwright test cases to cover the registration, login, item addition, profile update, password reset, and re-login functionalities.
- Added assertions to validate toast messages and email confirmation.
- Included necessary negative test cases to check for improper inputs and error handling.
- Configured `.gitignore` to exclude unnecessary files and folders (`node_modules`, `.env`, etc.).
- Generated test reports using **Allure/Mochawesome**.
- Recorded the automation process and included it in the documentation.

## How to Run the Tests
To execute the Playwright test cases, follow these steps:

### Running All Tests
```sh
npx playwright test
```

### Running Tests with Allure Report
```sh
npx playwright test --reporter=line,allure
```
To view the Allure report:
```sh
allure serve allure-results
```

### Running Tests with Mochawesome Report
```sh
npx playwright test --reporter=mochawesome
```

### Running Specific Test
```sh
npx playwright test tests/<test-file-name>.spec.js
```

## Test Report & Documentation
- **Negative Test Cases:**

  
- **Automation Process Recording:**


https://github.com/user-attachments/assets/1760f32e-bf2c-4307-812e-6e8f76beff70



https://github.com/user-attachments/assets/954669d5-c66e-4d94-8023-2341ae5e827f



- **Screenshots & Reports:**

![Image (3)](https://github.com/user-attachments/assets/cb55cd9e-189b-4ddd-b9d1-ba3c4d6fe3ba)
![Image (2)](https://github.com/user-attachments/assets/8828f3eb-9adc-42d6-8c3e-a2667fb47362)
![Image (1)](https://github.com/user-attachments/assets/f031b863-4d54-4087-9e9c-4599f1873dc3)

---

This repository is maintained for testing and automation purposes. Feel free to contribute or report issues!

