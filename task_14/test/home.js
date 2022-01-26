const homepage = require('../pageobjects/homepage')

describe('Test with selenium webdriver', function(){
    this.timeout(2000)
    it('Open https://pastebin.com', function(){
        //Test steps
        var baseUrl = 'https://pastebin.com/'
        homepage.go_to_url(baseUrl)
    })

    it('Paste "Hello from WebDriver"', function(){
        homepage.enter_paste('postform-text', 'Hello from WebDriver')
    })

    // it('Paste Expiration: "10 Minutes"', function(){
    //     homepage.set_expiration('select2-postform-expiration-container')
    // })

    it('Paste Expiration: "10 Minutes"', function(){
        homepage.set_expiration('select2-postform-expiration-results', '10 Minutes')
    })

    // it('Choose 10 minutes', function(){
    //     homepage.choose_expire_time('10')
    // })
})

