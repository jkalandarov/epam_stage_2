const { Builder, By, Key, until } = require("selenium-webdriver");
const { elementLocated, elementIsVisible } = require("selenium-webdriver/lib/until");

class Helper {
    static waitForLocated(id) {
        return driver.wait(until.elementLocated(By.id(id)))
    }

    static waitForLocatedByXpath(id) {
        return driver.wait(until.elementLocated(By.xpath(id)))
    }

    static waitForIdVisible(id){
        return driver.wait(until.elementIsVisible(By.id(id)))
    }

    static waitForClassVisible(className){
        return driver.wait(until.elementIsVisible(By.className(className)))
    }

    static waitForXpathVisible(xpath){
        return driver.wait(until.elementIsVisible(By.xpath(xpath)))
    }

    static waitDOM(){
        return driver.wait(()=> documentInitialised(), 10000)
    }

    static findById(id) {
        return driver.findElement(By.id(id));
    }

    static findByClass(className) {
        return driver.findElement(By.className(className));
    }

    static findByXpath(xpath) {
        return driver.findElement(By.xpath(xpath));
    }

}

module.exports = Helper;
