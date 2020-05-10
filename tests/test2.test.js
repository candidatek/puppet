const puppeteer = require('puppeteer') ; 
describe('My Second Test' , () => {
 it ('Should Handle the input ' , async function() {
    const browser = await puppeteer.launch({headless: false ,
      slowMo : 1 , 
      devtools:false})
    const page = await browser.newPage()
    await page.goto('https://devexpress.github.io/testcafe/example/')
    await page.type('#developer-name' , 'SomeRandom name')
    // await page.waitFor(1000)
    // await page.click('#tried-test-cafe')
    // await page.select('#preferred-interface', 'JavaScript API')
    // await page.type('#comments' , 'Lets fill this text with some text')
    // await page.click('#submit-button')
    // await page.waitForSelector('.result-cotent')
    // await page.waitFor(300)

     
    
    await browser.close()
 })
})