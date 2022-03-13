const path = require("path")

class Helper {
    
    static waitExist(obj, millsec){
        return obj.waitForExist({timeout: millsec || 5000})
    }

    static waitEnabled(obj, millsec){
        return obj.waitForEnabled({timeout: millsec || 5000})
    }

    static waitVisible (obj, millsec){
        return obj.waitForDisplayed({timeout: millsec || 5000})
    }    

    static getAddress () {
        return './screenshots';
    }

    static waitImplicit(implicit = 3000, pageLoad = 10000, script = 5000) {
        return browser.setTimeout({ implicit: implicit, pageLoad: pageLoad, script: script });
    }

    static screenShot(fileName){
        return driver.saveScreenshot(this.getAddress() + fileName + ".png")
    }

    static switchFrame(number){
        return browser.switchToFrame(number)
    }

    static view(obj){
        return obj.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

}

module.exports = Helper