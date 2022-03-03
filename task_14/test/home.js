const chai = require('chai')
var expect = chai.expect
const BasePage = require('../pageobjects/basepage')
const HomePage = require('../pageobjects/homepage')
const ResultPage = require('../pageobjects/resultpage')
var baseUrl = 'https://pastebin.com/'

let syntax = 'Bash'
let expirationTime = '10 Minutes'

describe('I Can Win', function(){
    const Home = new HomePage()
    let pastedText = 'Hello from WebDriver'
    let pageTitle = 'helloweb'

    it('Open https://pastebin.com', function(){
        HomePage.goToUrl(baseUrl)
    })

    it('Paste "Hello from WebDriver"', function(){
        HomePage.enterPaste('postform-text', pastedText)
    })

    it('set highlightning', function(){
        HomePage.setSyntax('select2-postform-format-container', 'select2-search__field', syntax)
    })

    it('Paste Expiration: "10 Minutes"', function(){
        HomePage.setExpiration('select2-postform-expiration-container', expirationTime)
    })

    it('Paste name: helloweb', function(){
        HomePage.pasteName('postform-name', pageTitle)
    })

    it('Click "Create New Paste"', function(){
        HomePage.clickButton()
    })

    it('Assertion checks', function() {
        expect(BasePage.driver.getTitle()).to.equal(pageTitle)
        expect(ResultPage.selectBashIconByXpath.getText()).to.equal(syntax)
        expect(ResultPage.selectTimeElementByClass.getText()).to.equal(expirationTime)
        expect(ResultPage.selectPastedTextByClass.getText()).to.equal(pastedText)
    })

})

describe('Bring it on', function(){
    this.timeout(5000)
    let pastedText = 'git config --global user.name "New Sheriff in Town" \n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force'
    let pageTitle = 'how to gain dominance among developers'
    it('Open https://pastebin.com', function(){
        HomePage.goToUrl(baseUrl)
    })

    it('Create a New Paste with the following details', function(){
        HomePage.enterPaste('postform-text', pastedText)
    })

    it('Set Syntax Highlighting: "Bash"', function(){
        HomePage.setSyntax('select2-postform-format-container', syntax)
    })

    it('Paste Expiration: "10 Minutes"', function(){
        HomePage.setExpiration('select2-postform-expiration-container', expirationTime)
    })

    it('Paste name: how to gain dominance among developers', function(){
        HomePage.pasteName('postform-name', pageTitle)
    })

    it('Click "Create New Paste"', function(){
        HomePage.clickButton()
    })

    it('Assertion checks', function(){
        expect(BasePage.driver.getTitle()).to.equal(pageTitle)
        expect(ResultPage.selectBashIconByXpath.getText()).to.equal(syntax)
        expect(ResultPage.selectTimeElementByClass.getText()).to.equal(expirationTime)
        expect(ResultPage.selectPastedTextByClass.getText()).to.equal(pastedText)
    })
})