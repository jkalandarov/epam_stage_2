const chai = require('chai')
var expect = chai.expect
const homepage = require('../pageobjects/homepage')
var baseUrl = 'https://pastebin.com/'

describe('I Can Win', function(){

    it('Open https://pastebin.com', function(){
        homepage.go_to_url(baseUrl)
    })

    it('Paste "Hello from WebDriver"', function(){
        homepage.enter_paste('postform-text', 'Hello from WebDriver')
    })

    it('set highlightning', function(){
        homepage.set_syntax('select2-postform-format-container', 'select2-search__field', 'Bash')
    })

    it('Paste Expiration: "10 Minutes"', function(){
        homepage.set_expiration('select2-postform-expiration-container', '10 Minutes')
    })

    it('Paste name: helloweb', function(){
        homepage.paste_name('postform-name', 'helloweb')
    })

    it('Click "Create New Paste"', function(){
        homepage.click_btn()
    })

})

// describe('Bring it on', function(){
//     this.timeout(5000)
//     it('Open https://pastebin.com', function(){
//         homepage.go_to_url(baseUrl)
//     })

//     it('Create a New Paste with the following details', function(){
//         homepage.enter_paste('postform-text', 'git config --global user.name "New Sheriff in Town"')
//         homepage.enter_paste('postform-text', 'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")')
//         homepage.enter_paste('postform-text', 'git push origin master --force')
//     })

//     it('Set Syntax Highlighting: "Bash"', function(){
//         homepage.set_syntax('select2-postform-format-container', 'Bash')
//     })

//     it('Paste Expiration: "10 Minutes"', function(){
//         homepage.set_expiration('select2-postform-expiration-container', '10 Minutes')
//     })

//     it('Paste name: how to gain dominance among developers', function(){
//         homepage.paste_name('postform-name', 'how to gain dominance among developers')
//     })

//     it('Click "Create New Paste"', function(){
//         homepage.click_btn()
//     })    
// })