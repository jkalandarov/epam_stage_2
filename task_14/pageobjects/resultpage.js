const BasePage = require('./basepage')
const Helper = require('../helpers/helper')

class Result extends BasePage {
    static async selectBashIconByXpath(xpath){
        return await Helper.findByXpath(xpath)
    }

    static async selectPastedTextByClass(className){
        return await Helper.findByClass(className)
    }

    static async selectTimeElementByClass(className){
        return await Helper.findByClass(className)
    }

    static async selectChosenPageTitleByXpath(xpath){
        return await Helper.findByXpath('//*[@class="info-top"]/h1')
    }
}

module.exports = Result