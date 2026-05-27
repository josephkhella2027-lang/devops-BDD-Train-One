import { Given, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let page;

// Shared page instance
export const getPage = () => page;

// Reusable page opener
async function openPage() {
  browser = await chromium.launch({
    headless: true,
  });

  page = await browser.newPage();

  await page.goto("http://localhost:5174");
}

// Step aliases
Given("user opens the page", openPage);
Given("page is opened", openPage);

// Cleanup
After(async function () {
  await browser?.close();
});
