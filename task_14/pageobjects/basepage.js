var webdriver = require('selenium-webdriver')
const {Select} = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('firefox').build()

driver.manage().setTimeouts({implicit: 3000})

class BasePage {
    constructor(){
        global.driver = driver
    }

    static async go_to_url(url){
        await driver.get(url)
        await driver.manage().setTimeouts( { implicit: 10000 } )
    }
}

module.exports = BasePage