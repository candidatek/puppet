const puppeteer = require('puppeteer') ; 
describe('My first Tests' , () => {
 it ('Should open and close the browser ' , async function() {
    const browser = await puppeteer.launch({headless: false ,
      slowMo : 10 , 
      devtools:false})
    const page = await browser.newPage()
    await page.goto('https://example.com')
    const title  = await page.title()
    const url = await page.url()
    console.log("Title = ",title);
    console.log("URL = ", url);
    await page.waitFor(2500)
    
    
    //await page.waitForSelector('h1')
    //await page.goto('https://dev.to')
    //await page.waitForSelector('#top-bar')
    //await page.goBack()
    //await page.waitForSelector('h1')
    //await page.goForward('#top-bar')
    
    await browser.close()
 })
})