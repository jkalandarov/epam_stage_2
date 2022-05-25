const {Builder, By, Key, until} = require('selenium-webdriver')
const BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')
const { elementIsVisible, elementLocated } = require('selenium-webdriver/lib/until')
const Helper = require('../helpers/helper')

class HomePage extends BasePage {
    static async enterPaste(id, value){
        await Helper.findById(id).sendKeys(value, Key.ENTER)
    }

    static async setSyntax(id, className, value){
        // await Helper.waitForLocated(id)
        await Helper.findById(id).click()
        await Helper.findByClass(className).sendKeys(value, Key.ENTER)
    }

    static async setExpiration(id, value){
        await Helper.waitForLocated(id)
        await Helper.findById(id).click()
        await Helper.waitForLocatedByXpath(`//li[text()="${value}"]`).click()
    }

    static pasteName(id, name){
        driver.findElement(By.id(id)).sendKeys(name)
    }

    static clickButton(){
        driver.findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button')).click()
    }
}

module.exports = HomePage