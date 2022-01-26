const {Builder, By, Key, until} = require('selenium-webdriver')
const BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage {
    enter_paste(field_id, enterText){
        driver.findElement(By.id(field_id)).sendKeys(enterText)
    }

    async set_expiration(id, time){
        const dropdown = await driver.findElement(By.id(`${id}`))
        dropdown.click()
        dropdown.findElement(By.css(`li[value="${time}"]`)).click()
    
    // async choose_expire_time(time){
    //     await driver.findElement(By.css(`//*[@id="select2-postform-expiration-result-b5nq-${time}M"]`))
    //     .click()
    }

    paste_name(field_id, name){
        driver.findElement(By.id(field_id)).sendKeys(name)
    }

    click_btn(btn_class){
        driver.findElement(By.className(btn_class)).click()
    }
}

module.exports = new HomePage()