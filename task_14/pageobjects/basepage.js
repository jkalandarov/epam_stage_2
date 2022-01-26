var webdriver = require('selenium-webdriver')
const {Select} = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('firefox').build()

driver.manage().setTimeouts({implicit: 3000})

class BasePage {
    constructor(){
        global.driver = driver
    }

    go_to_url(url){
        driver.get(url)
    }
}

module.exports = BasePage