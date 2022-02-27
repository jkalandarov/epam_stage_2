const Helper = require('../helper/Helper')
const Main = require('../pageobjects/main.page')
const Email = require('../pageobjects/email.page')

describe('Hard core', () => {
    let tempEmail, 
        searchBtn,
        googleWindow,
        emailWindow

    it('Open Google Cloud Homepage', async () => {
       
        //Open the url
        await browser.url('/')
        await expect(browser).toHaveTitleContaining('Google Cloud')
    })
    
    it('Find and click on search button', async ()=> {
        //Select search button
        searchBtn = await Main.searchBtn
        await Helper.waitExist(searchBtn)
        await searchBtn.click()

        await expect(searchBtn).toExist()
    })

    it('Enter search query', async ()=>{
        //Insert search query into the search bar
        await searchBtn.setValue(Main.query)
        await browser.keys("\uE007")
        
        await expect(searchBtn).toHaveValue(Main.query)
    })

    it("Click on the necessary result", async ()=> {
        //Wait until DOM loads new content
        browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 60 * 1000, timeoutMsg: 'Failed to load DOM within a timeframe'
            }
        )

        //Choose the result that contains search query keyword
        const {searchResult} = await Main
        await Helper.waitExist(searchResult)
        await searchResult.click()

        await expect(browser).toHaveUrlContaining('https://cloud.google.com/products/calculator')
    })

    it('Activate necessary section', async ()=> {
        //Wait until DOM loads new content
        await browser.waitUntil(async () => await browser.execute(() => document.readyState === 'complete'),
            {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Message on failure'
            }
        )

        //Switch to inner iframe
        await Helper.switchFrame(0)
        await Helper.switchFrame(0)

        //Click on Compute Engine Tab
        const {computeEngineTab} = await Main
        await (await computeEngineTab).click()

        await expect(computeEngineTab).toHaveTextContaining('COMPUTE ENGINE')

    })

    it('Choose the number instances', async () => {
        //Set number of instances value
        const {instanceInput} = await Main
        await instanceInput.setValue(4)

        await expect(instanceInput).toHaveValue("4")
    })

    it("Select machine type", async () => {
        //Select Machine Type input
        const {machineType} = await Main
        await Helper.waitExist(machineType, 5000)
        await machineType.click()
        await Helper.view(machineType)

        //Select field e2-standard-8
        const {machineValue} = await Main
        await machineValue.waitForDisplayed()
        await machineValue.click()

        await expect(machineType).toBeClickable()
        await expect(machineValue).toHaveTextContaining('e2-standard-8')
    })

    //GPUs aren't available for selected machine type. 
    it.skip("Add GPUs", async () => {
        //Activate Add GPU checkbox
        const {gpuCheckBox} = await Main
        await Helper.view(gpuCheckBox)
        await gpuCheckBox.click()

        //Select GPU type input
        const {gpuType} = await Main
        await gpuType.click()

        //Select Nvidia V100
        const {chooseNVIDIA} = await Main
        await Helper.view(chooseNVIDIA)
        await chooseNVIDIA.click()

        //Select GPU count input
        const {numberOfGPUs} = await Main
        await numberOfGPUs.click()

        //Select 8 GPU count
        const {gpuCount} = await Main
        await gpuCount.click()
    })

    it("Choose datacenter location", async () => {
        //Data center location
        const {datacenter} = await Main
        await datacenter.click()
        await Helper.view(datacenter)

        //Choose Frankfurt
        const {city} = await Main
        
        await Helper.view(city)
        await Helper.waitVisible(city)
        await city.click()

        //Committed usage
        const {commit} = await Main
        await commit.click()
        const {commitOption} = await Main
        await Helper.waitEnabled(commitOption)
        await commitOption.click()
        await Helper.view(commitOption)

        await expect(city).toHaveValueContaining('west3')
        await expect(commit).toHaveTextContaining('1')
    })

    //Not related to estimation
    it.skip('Should choose SSD input', async ()=>{
        //Select Local SSD input
        const {localSSD} = await Main
        await localSSD.click()
        await Helper.view(localSSD)            

        //Choose SSD value
        const {chooseSSD} = await Main
        await chooseSSD.click()
        await Helper.view(chooseSSD)
    })

    it("Add to Estimate", async () => {
        //Select Estimate button
        const {estimateBtn} = await Main
        await Helper.waitExist(estimateBtn)
        await Helper.view(estimateBtn)
        await estimateBtn.click()
        await Helper.screenShot('button')
    })

    it("Email Estimate", async () => {
        //Email Estimate
        const {emailBtn} = await Main
        await Helper.waitExist(emailBtn)
        await Helper.view(emailBtn)
        await emailBtn.click()

        googleWindow = await browser.getWindowHandle()

        await expect(emailBtn).toHaveTextContaining('EMAIL')
    })

    it("Open temporary email service", async () => {
        //Open 10 minute email in a new tab
        await browser.newWindow('https://tempail.com/en/')
        const handles = await browser.getWindowHandles()
        
        // //Switch to new window
        await browser.switchToWindow(handles[1])

        //Get the value of email address
        await browser.pause(5000)
        const {emailAddress} = Email
        await Helper.waitVisible(emailAddress, 5000)
        
        tempEmail = await emailAddress.getValue()
        await expect(emailAddress).toHaveValueContaining('.com')

        //Switch back to parent window
        await browser.switchToWindow(handles[0])
    })

    it("Open email form", async () => {
        //Open email form
        await Helper.switchFrame(0)
        await Helper.switchFrame(0)
        const {emailInput} = await Email
        await Helper.waitExist(emailInput)
        await Helper.view(emailInput)
        await emailInput.setValue(tempEmail)
        
        await expect(emailInput).toHaveValue(tempEmail)
    })

    it("Send Email", async () => {
        //Send Email
        const {sendBtn} = await Main
        await Helper.waitEnabled(sendBtn)
        await Helper.view(sendBtn)
        await sendBtn.click()
    })

})

