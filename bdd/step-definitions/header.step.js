/* const { Given, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser;
let page;

Given("user opens the page", async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();

  await page.goto("http://localhost:5174");
});

Then("div with id {string} should exist", async function (id) {
  const element = page.locator(`#${id}`);

  if ((await element.count()) === 0) {
    throw new Error(`Div with id "${id}" not found`);
  }
});

Then(
  "div with id {string} should have class {string}",
  async function (id, className) {
    const element = page.locator(`#${id}`);

    const classAttr = await element.getAttribute("class");

    if (!classAttr || !classAttr.includes(className)) {
      throw new Error(`Expected class "${className}" but got "${classAttr}"`);
    }

    await browser.close();
  },
);
 */
import { Then } from "@cucumber/cucumber";
import { getPage } from "./common.step.js";

Then("div with id {string} should exist", async function (id) {
  const page = getPage();
  const element = page.locator(`#${id}`);

  const count = await element.count();

  if (count === 0) {
    throw new Error(`Div with id "${id}" not found`);
  }
});

Then(
  "div with id {string} should have class {string}",
  async function (id, className) {
    const page = getPage();
    const element = page.locator(`#${id}`);

    const classAttr = await element.getAttribute("class");

    if (!classAttr || !classAttr.includes(className)) {
      throw new Error(`Expected class "${className}" but got "${classAttr}"`);
    }
  },
);
