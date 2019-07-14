import '@babel/polyfill';
import puppeteer from 'puppeteer';
import devices from 'puppeteer/DeviceDescriptors'

const iPhone6 = devices['iPhone 6']

describe('Search', () => {
  it('Visit search page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(iPhone6)

    await page.goto('http://localhost:3000/search');
    const input = await page.$('input')
    await input.type('test')
    // await page.screenshot({ path: '/Users/homerwang/projects/react-demo/screenshot.png' })
    // await page.type('#userName', 'mockuser');
    // await page.type('#password', 'wrong_password');
    // await page.click('button[type="submit"]');
    // await page.waitForSelector('.ant-alert-error'); // should display error

    await page.close();
    await browser.close();
  });
});
