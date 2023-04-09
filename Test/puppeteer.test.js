const puppeteer = require("puppeteer");

describe("login page", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://daotao.hutech.edu.vn/");
  });

  afterAll(() => {
    browser.close();
  });

  test("should log in successfully with correct credentials", async () => {
    await page.type("#usernam", "admin");
    await page.type("#password", "password");
    await page.click("#submit-button");
    await page.waitForNavigation();
    const url = page.url();
    expect(url).toBe("http://daotao.hutech.edu.vn/default.aspx?page=gioithieu");
  });

  test("should display error message with incorrect credentials", async () => {
    await page.type("#username", "user");
    await page.type("#password", "pass");
    await page.click("#submit-button");
    await page.waitForSelector("#error-message");
    const errorMessage = await page.$eval("#error-message", (el) => el.textContent);
    expect(errorMessage).toBe("Invalid username or password");
  });
});
