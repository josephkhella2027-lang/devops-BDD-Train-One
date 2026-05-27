/* const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser;
let page;

Given("user opens the page", { timeout: 30000 }, async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();

  await page.goto("http://localhost:5174");
});

When(
  "user types {string} in input with id {string}",
  async function (text, id) {
    const selector = `#${id}`;

    const element = page.locator(selector);

    if ((await element.count()) === 0) {
      this.errorDetected = `Input not found: ${id}`;
      return;
    }

    await element.fill(text);
  },
);

When("user clicks the button", async function () {
  await page.click("#showBtn");
});

Then("text should be shown on screen", async function () {
  const output = await page.textContent("#output");

  if (!output.includes("Hello World")) {
    throw new Error("Text not shown correctly");
  }

  await browser.close();
});

Then("text should be empty", async function () {
  const output = await page.textContent("#output");

  if (output !== "") {
    throw new Error("Expected empty text");
  }

  await browser.close();
});

Then("error should be shown", async function () {
  if (!this.errorDetected) {
    throw new Error("Expected error but none happened");
  }

  await browser.close();
});
Then(
  "input with id {string} should have class {string}",
  async function (id, className) {
    const element = page.locator(`#${id}`);

    if ((await element.count()) === 0) {
      throw new Error(`Input not found: ${id}`);
    }

    const classAttr = await element.getAttribute("class");

    if (!classAttr || !classAttr.includes(className)) {
      throw new Error(`Expected class "${className}" but got "${classAttr}"`);
    }

    await browser.close();
  },
);
 */
import { When, Then } from "@cucumber/cucumber";
import { getPage } from "./common.step.js";

When(
  "user types {string} in input with id {string}",
  async function (text, id) {
    const page = getPage();
    const locator = page.locator(`#${id}`);

    if ((await locator.count()) === 0) {
      this.errorDetected = `Input not found: ${id}`;
      return;
    }

    await locator.fill(text);
  },
);

When("user clicks the button", async function () {
  const page = getPage();
  await page.click("#showBtn");
});

Then("text should be shown on screen", async function () {
  const page = getPage();

  const output = await page.textContent("#output");

  if (!output?.includes("Hello World")) {
    throw new Error(`Expected "Hello World" but got "${output}"`);
  }
});

Then("text should be empty", async function () {
  const page = getPage();

  const output = await page.textContent("#output");

  if (output !== "") {
    throw new Error(`Expected empty text but got "${output}"`);
  }
});

Then("error should be shown", async function () {
  if (!this.errorDetected) {
    throw new Error("Expected error but none was detected");
  }
});
Then(
  "input with id {string} should have class {string}",
  async function (id, expectedClass) {
    const page = getPage();

    const locator = page.locator(`#${id}`);

    const classAttr = await locator.getAttribute("class");

    if (!classAttr || !classAttr.includes(expectedClass)) {
      throw new Error(
        `Expected class "${expectedClass}" but got "${classAttr}"`,
      );
    }
  },
);
