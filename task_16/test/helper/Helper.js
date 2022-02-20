class Helper {
    static waitExist(obj, millsec){
        if (millsec) {
            return obj.waitForExist({timeout: millsec})
        } else {
            return obj.waitForExist()
        }
    }

    static waitEnabled(obj, millsec){
        if (millsec) {
            return obj.waitForEnabled({timeout: millsec})
        } else {
            return obj.waitForEnabled()
        }
    }

    static waitVisible (obj, millsec){
        if (millsec) {
            return obj.waitForDisplayed({timeout: millsec})
        } else {
            return obj.waitForDisplayed()
        }
    }    

    static getAddress () {
        return 'C:\\Users\\jkala\\OneDrive\\Рабочий стол\\epam_stage_2\\task_16\\screenshots/'
    }

    static screenShot(fileName){
        return driver.saveScreenshot(this.getAddress() + fileName + ".png")
    }

    static switchFrame(number){
        return browser.switchToFrame(number)
    }

    static switchFrameNested(nth){
        for (let index = 1; index <= nth; index++) {
            return browser.switchToFrame(0)
        }
    }

    static select(element) {
        return $(element)
    }

    static view(obj){
        return obj.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    static click(obj){
        return obj.click()
    }

    static stopAndCheckError(error){
        console.log(error)
        // process.exit(1)
    }

    static selectBtn(){
        return $('')
    }
}

module.exports = Helper