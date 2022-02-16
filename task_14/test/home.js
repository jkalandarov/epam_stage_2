const chai = require('chai')
var expect = chai.expect
var driver = require('selenium-webdriver')
const { Driver } = require('selenium-webdriver/chrome')
const HomePage = require('../pageobjects/homepage')
var baseUrl = 'https://pastebin.com/'

describe('I Can Win', function(){
    const Home = new HomePage()
    it('Open https://pastebin.com', function(){
        HomePage.go_to_url(baseUrl)
    })

    it('Paste "Hello from WebDriver"', function(){
        HomePage.enter_paste('postform-text', 'Hello from WebDriver')
    })

    it('set highlightning', function(){
        HomePage.set_syntax('select2-postform-format-container', 'select2-search__field', 'Bash')
    })

    it('Paste Expiration: "10 Minutes"', function(){
        HomePage.set_expiration('select2-postform-expiration-container', '10 Minutes')
    })

    it('Paste name: helloweb', function(){
        HomePage.paste_name('postform-name', 'helloweb')
    })

    it('Click "Create New Paste"', function(){
        HomePage.click_btn()
    })

})

describe('Bring it on', function(){
    this.timeout(5000)
    it('Open https://pastebin.com', function(){
        HomePage.go_to_url(baseUrl)
    })

    it('Create a New Paste with the following details', function(){
        HomePage.enter_paste('postform-text', 'git config --global user.name "New Sheriff in Town"')
        HomePage.enter_paste('postform-text', 'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")')
        HomePage.enter_paste('postform-text', 'git push origin master --force')
    })

    it('Set Syntax Highlighting: "Bash"', function(){
        HomePage.set_syntax('select2-postform-format-container', 'Bash')
    })

    it('Paste Expiration: "10 Minutes"', function(){
        HomePage.set_expiration('select2-postform-expiration-container', '10 Minutes')
    })

    it('Paste name: how to gain dominance among developers', function(){
        HomePage.paste_name('postform-name', 'how to gain dominance among developers')
    })

    it('Click "Create New Paste"', function(){
        HomePage.click_btn()
    })    
})