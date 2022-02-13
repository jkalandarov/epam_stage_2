describe('Hard core', () => {
    it('Open Google Cloud Homepage', async () => {
        await browser.url('/')

        //Find and click on search button
        const searchBtn = await $('.devsite-searchbox > input')
        await searchBtn.waitForExist({timeout: 5000})
        await searchBtn.click()

        //Type into search bar
        await searchBtn.addValue('Google Cloud Platform Pricing Calculator')
        await browser.keys("\uE007")

        //Find result
        const searchResult = await $('a.gs-title > b')
        await searchResult.waitForExist({timeout: 5000})
        await searchResult.click()
        
        //Activate Compute Engine
        browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
        )
        const computeEngine = await $('div*=Compute')
        await computeEngine.waitForExist({timeout: 5000})
        await computeEngine.click()

        //Number of instances 4
        const closeBurgerBtn = await $('/html/body/section/devsite-header/div/div[1]/div/div/div[2]/div[1]/cloudx-tabs-nav/nav/tab[2]/div/button')
        await closeBurgerBtn.waitForExist({timeout: 30000})
        await closeBurgerBtn.click()
        const numOfInstances = await $('//*[@id="input_77"]')
        await numOfInstances.waitForExist({timeout: 30000})
        await numOfInstances.addValue(4)

        //Select machine type
        const machineTypeInput = await $('//*[@id="select_value_label_73"]/span[2]')
        await machineTypeInput.click()
        const e2_standard_8 = await $('//*[@id="select_option_274"]/div')
        await e2_standard_8.click()

        // //Add GPUs
        const activateGPUsCheckBox = await $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[2]/form/div[4]/div[1]/md-input-container/md-checkbox/div[1]/div[2]')
        await activateGPUsCheckBox.click()
        const chooseGPUtype = await $('//*[@id="select_432"]')
        await chooseGPUtype.click()
        const chooseNVIDIA = await $('//*[@id="select_option_438"]/div')
        await chooseNVIDIA.click()
        const openNumberOfGPUs = await $('//*[@id="select_value_label_413"]/span[1]')
        await openNumberOfGPUs.click()
        const choose8GPUs = await $('//*[@id="select_option_445"]/div')
        await choose8GPUs.click()
        const openLocalSSD = await $('//*[@id="select_value_label_120"]/span[1]')
        await openLocalSSD.click()
        const chooseSSD = await $('//*[@id="select_option_135"]/div')
        await chooseSSD.click()
        const chooseCommittedUsage = await $('//*[@id="select_value_label_122"]/span[1]/div')
        await chooseCommittedUsage.click()
        const oneYearCommitment = $('//*[@id="select_option_142"]/div')
        await oneYearCommitment.click()

        //Choose datacenter location
        const openDCinput = await $('//*[@id="select_value_label_75"]/span[2]')
        await openDCinput.click()
        const frankfurtDC = $('//*[@id="select_option_238"]/div')
        await frankfurtDC.click()

        //Add to Estitmate
        const addToEstimateBtn1 = await $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[17]/button')
        await addToEstimateBtn1.click()

        //Email Estimate
        const emailEstimateBtn = await $('//*[@id="email_quote"]')
        await emailEstimateBtn.click()

        //Open 10 minute email in a new tab
        await browser.createWindow('tab').url('https://10minutemail.com/')
        const copyEmailBtn = await $('//*[@id="mail_address"]')
        await browser.closeWindow()

        //Open email form
        const emailInput = await $('//*[@id="mail_address"]')
        await emailInput.setValue(copyEmailBtn.getText())

        //Send Email
        const sendEmailBtn = await $('//*[@id="dialogContent_470"]/form/md-dialog-actions/button[2]')
        await sendEmailBtn.click()
    })
        
})

