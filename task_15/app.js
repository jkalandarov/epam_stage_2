const express = require('express')
const app = express()
const port = 3000
const {remote} = require('webdriverio')

app.use(express.json())

app.get('/', (req, res)=>{

    ;(async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'chrome'
            }
        })

        await browser.url('https://webdriver.io')

        const apiLink = await browser.$('=API')
        await apiLink.click()

        await browser.saveScreenshot('./screenshot.png')
        await browser.deleteSession()
    })()

    res.sendFile(__dirname + '/screenshot.png', function(err){
        if (err) {
            console.log(err)
        } else {
            console.log('Sent: ' + 'screenshot.png');
        }
    })
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})
