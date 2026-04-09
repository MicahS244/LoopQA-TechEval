# Loop Technical Evaluation 

This project demonstrates an end-to-end test suite built with Playwright using Typescript and a data-driven testing approach.

## Design

The goal of this project was to create a scalable and maintainable test framework, minimizing duplicaiton and separating test logic from test data.

### Key design decisions

-Typscript was chosen over JavaScript to improve code reliaility and readiability. 

-Playwright provides fast and reliablie browser automation with built-in support for modern web apps.

-POM (Page Object Model) allows us to keep test logic organized by separating page interactions from assertions.

-JSON data allows new test scenarios to be added without changing the test logic.

## Project Structure

pages/
  loginPage.ts
  boardPage.ts

tests/
  app.spec.ts
  testData.json

## SetUp

Install dependencies:

npm install 

Install Playwright:

npmx playwright install 

## Run Tests
Run all tests:

npx playwright test

Run headed:
-Headed runs the browser with a GUI allowing us to watch the test execution

npx playwright test --headed

Run test file:

npx playwright test tests/app.sec.ts --headed



