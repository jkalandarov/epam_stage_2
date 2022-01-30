const {Builder, By, Key, until} = require('selenium-webdriver')
const BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage {
    enter_paste(id, value){
        driver.findElement(By.id(id)).sendKeys(value, Key.ENTER)
    }

    async set_syntax(id, value){
        await driver.findElement(By.id(id)).click()
        await driver.findElement(By.xpath(`//li[text()="${value}"]`)).click()
    }

    set_expiration(id, value){
        driver.findElement(By.id(id)).click()
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