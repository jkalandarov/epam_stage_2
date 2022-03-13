class Helper {
    static waitForElement(element) {
        browser.waitUntil(async () => {
            await element.isExisting(), {timeout: 10000, timeoutMsg: 'Expected element to exist'}
        })
    }

    static view(element) {
        return element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}

module.exports = Helper;