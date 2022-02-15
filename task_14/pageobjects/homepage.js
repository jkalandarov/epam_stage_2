const {Builder, By, Key, until} = require('selenium-webdriver')
const BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')
const { elementIsVisible, elementLocated } = require('selenium-webdriver/lib/until')
const Helper = require('../helpers/helper')

class HomePage extends BasePage {
    async enter_paste(id, value){
        await Helper.findById(id).sendKeys(value, Key.ENTER)
        await Helper.waitDOM()
    }

    async set_syntax(id, className, value){
        await Helper.findById(id).click()
        await Helper.findByClass(className).sendKeys(value, Key.ENTER)
    }

    async set_expiration(id, value){
        await Helper.findById(id).click()
        driver.findElement(By.xpath(`//li[text()="${value}"]`)).click()
    }

    paste_name(id, name){
        driver.findElement(By.id(id)).sendKeys(name)
    }

    click_btn(){
        driver.findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button')).click()
    }
}

module.exports = new HomePage()