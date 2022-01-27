const homepage = require('../pageobjects/homepage')

describe('I Can Win', function(){
    this.timeout(2000)
    it('Open https://pastebin.com', function(){
        //Test steps
        var baseUrl = 'https://pastebin.com/'
        homepage.go_to_url(baseUrl)
    })

    it('Paste "Hello from WebDriver"', function(){
        homepage.enter_paste('postform-text', 'Hello from WebDriver')
    })

    it('Paste Expiration: "10 Minutes"', function(){
        homepage.set_expiration('select2-postform-expiration-container', '10 Minutes') //couldn't choose "10 Minutes"
    })

    it('Paste name: helloweb', function(){
        homepage.paste_name('postform-name', 'helloweb')
    })

    it('Click "Create New Paste"', function(){
        homepage.click_btn()
    })

})

