const {Builder, By, Key, until} = require('selenium-webdriver')
const BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage {
    enter_paste(field_id, enterText){
        driver.findElement(By.id(field_id)).sendKeys(enterText)
    }

    async set_expiration(id, time){
        await driver.findElement(By.id(`${id}`)).click()
        await driver.findElement(By.xpath(`//li[text()="${time}"]`)).click()
    }

    paste_name(field_id, name){
        driver.findElement(By.id(field_id)).sendKeys(name)
    }

    click_btn(){
        driver.findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button')).click()
    }
}

module.exports = new HomePage()