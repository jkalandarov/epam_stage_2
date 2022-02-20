const { elementToBeSelected, elementToBeEnabled } = require('wdio-wait-for')
const Helper = require('../helper/Helper')
const address = Helper.getAddress()

describe('Hard core', () => {
    let tempEmail, 
        searchBtn,
        query = 'Google Cloud Platform Pricing Calculator'

    it('Open Google Cloud Homepage', async () => {
        try {
            //Open the url
            await browser.url('/')

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })
    
    it('Find and click on search button', async ()=> {
        try {
            //Select search button
            searchBtn = await Helper.select('.devsite-searchbox > input')
            await Helper.waitExist(searchBtn)
            await Helper.click(searchBtn)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it('Enter search query', async ()=>{
        try {
            //Insert search query into the search bar
            await Helper.waitExist(searchBtn)
            await searchBtn.setValue(query)
            await browser.keys("\uE007")

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it("Click on the necessary result", async ()=> {
        try {
            //Wait until DOM loads new content
            browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'),
                {
                  timeout: 60 * 1000, timeoutMsg: 'Message on failure'
                }
            )

            //Choose the result that contains search query keyword
            const searchResult = await $(`a=${query}`)
            await Helper.waitExist(searchResult)
            await searchResult.click()

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it('Activate necessary section', async ()=> {
        try {
            //Wait until DOM loads new content
            await browser.waitUntil(async () => await browser.execute(() => document.readyState === 'complete'),
                {
                timeout: 60 * 1000, // 60 seconds
                timeoutMsg: 'Message on failure'
                }
            )

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it('Choose the number instances', async () => {
        try {
            //Switch to inner iframe
            await (await $('devsite-iframe > iframe')).waitForDisplayed(10000)
            await Helper.switchFrame(0)
            await (await $('#myFrame')).waitForDisplayed(10000)
            await Helper.switchFrame(0)

            //Set number of instances value
            const numOfInstances = await Helper.select('input[ng-model="listingCtrl.computeServer.quantity"]')
            await numOfInstances.setValue(4)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it("Select machine type", async () => {
        try {
            //Select Machine Type input
            const machineTypeInput = await Helper.select('md-select[ng-model="listingCtrl.computeServer.instance"]')
            await Helper.waitExist(machineTypeInput, 5000)
            await Helper.click(machineTypeInput)
            await Helper.view(machineTypeInput)

            //Select field e2-standard-8
            const e2_standard_8 = await Helper.select('//div[contains(., "e2-standard-8")]')
            await e2_standard_8.waitForDisplayed()
            await Helper.click(e2_standard_8)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    //GPUs aren't available for selected machine type. 
    it.skip("Add GPUs", async () => {
        try {
            //Activate Add GPU checkbox
            const activateGPUsCheckBox = await Helper.select('md-checkbox[ng-model="listingCtrl.soleTenant.addGPUs"]')
            await Helper.view(activateGPUsCheckBox)
            await Helper.click(activateGPUsCheckBox)

            //Select GPU type input
            const chooseGPUtype = await Helper.select('md-select[ng-model="listingCtrl.soleTenant.gpuType"]')
            await Helper.click(chooseGPUtype)

            //Select Nvidia V100
            const chooseNVIDIA = await Helper.select('//div[contains(., "Tesla V100")]') //md-option[value="NVIDIA_TESLA_V100"]
            await Helper.view(chooseNVIDIA)
            await Helper.click(chooseNVIDIA)

            //Select GPU count input
            const openNumberOfGPUs = await Helper.select('md-select[ng-model="listingCtrl.soleTenant.gpuCount"]')
            await Helper.click(openNumberOfGPUs)

            //Select 8 GPU count
            const choose8GPUs = await Helper.select('md-option[value="8"]')
            await Helper.click(choose8GPUs)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it("Choose datacenter location", async () => {
        try {
            //Data center location
            const datacenter = await Helper.select('md-select[ng-model="listingCtrl.computeServer.location"]')
            await Helper.click(datacenter)
            await Helper.view(datacenter)

            //Choose Frankfurt
            const city = await $$('md-option[value="europe-west3"]')[2]
            
            await Helper.view(city)
            await Helper.waitVisible(city)
            await Helper.click(city)

            //Committed usage
            const commit = await Helper.select('md-select[ng-model="listingCtrl.computeServer.cud"]')
            await Helper.click(commit)
            const commitOption = await $$('md-option[ng-value="1"]')[1]
            await Helper.waitEnabled(commitOption)
            await Helper.click(commitOption)
            await Helper.view(commitOption)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    //Not related to estimation
    it.skip('Should choose SSD input', async ()=>{
        try {
            //Select Local SSD input
            const openLocalSSD = await Helper.select('md-select[ng-model="listingCtrl.soleTenant.ssd"]')
            await Helper.click(openLocalSSD)
            await Helper.view(openLocalSSD)            

            //Choose SSD value
            const chooseSSD = Helper.select('//div[contains(., "24")]') //md-option[ng-value="24"]
            await Helper.click(chooseSSD)
            await Helper.view(chooseSSD)

        } catch (error) {
            Helper.stopAndCheckError(error)
        }
    })

    it("Add to Estimate", async () => {
        //Select Estimate button
        const estimateBtn = await Helper.select('form[name="ComputeEngineForm"] > div > button')
        await Helper.waitExist(estimateBtn)
        await Helper.view(estimateBtn)
        await Helper.click(estimateBtn)
        await Helper.screenShot('button')
    })

    it("Email Estimate", async () => {
        //Email Estimate
        const emailBtn = Helper.select('button[id="email_quote"]')
        await Helper.waitExist(emailBtn)
        await Helper.view(emailBtn)
        await Helper.click(emailBtn)
    })

    it("Open temporary email service", async () => {
        //Open 10 minute email in a new tab
        await browser.newWindow('https://10minutemail.com/')
        const handles = await browser.getWindowHandles()

        //Switch to new window
        await browser.switchToWindow(handles[1])

        //Copy the value of email address
        const emailAddress = await $('#mail_address')
        await Helper.waitExist(emailAddress)
        tempEmail = emailAddress.getText()
        await browser.closeWindow()

        //Switch back to parent window
        await browser.switchToWindow(handles[0])
    })

    it("Open email form", async () => {
        //Open email form
        await browser.switchWindow('google.com')
        const emailInput = await Helper.select('input[ng-model="emailQuote.user.email"]')
        await Helper.waitExist(emailInput)
        await Helper.view(emailInput)
        await Helper.click(emailInput)
        await emailInput.setValue(tempEmail)
    })

    it("Send Email", async () => {
        //Send Email
        const sendBtn = await Helper.select('ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"')
        await Helper.waitEnabled(sendBtn)
        await Helper.view(sendBtn)
        await Helper.click(sendBtn)
    })
})

