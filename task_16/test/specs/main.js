const Helper = require('../helper/Helper');
const CalculatorPage = require('../pageobjects/GoogleCalculatorPage');
const Email = require('../pageobjects/email.page');

describe('Hard core', () => {
    let tempEmail, 
        searchBtn,
        googleWindow,
        cityValue,
        commitOptionValue,
        instanceType

    it('Open Google Cloud Homepage', async () => {
        //Open the url
        await browser.url('/')
    });
    
    it('Find and click on search button', async ()=> {
        //Select search button
        searchBtn = await CalculatorPage.searchBtn;
        await Helper.waitExist(searchBtn);
        await searchBtn.click();
    });

    it('Enter search query', async ()=>{
        //Insert search query into the search bar
        await searchBtn.setValue(CalculatorPage.query)
        const enterButton = "\uE007";
        await browser.keys(enterButton);
    });

    it("Click on the necessary result", async ()=> {
        //Wait until DOM loads new content
        await Helper.waitImplicit(3000, 12000);

        //Choose the result that contains search query keyword
        const {searchResult} = await CalculatorPage;
        await Helper.waitExist(searchResult);
        await searchResult.click();
    });

    it('Activate necessary section', async ()=> {
        //Wait until DOM loads new content
        await Helper.waitImplicit(3000, 12000);

        //Switch to inner iframe
        await Helper.switchFrame(0);
        await Helper.switchFrame(0);

        //Click on Compute Engine Tab
        const {computeEngineTab} = await CalculatorPage;
        await (await computeEngineTab).click();

    });

    it('Choose the number instances', async () => {
        //Set number of instances value
        const {instanceInput} = await CalculatorPage;
        await instanceInput.setValue(4);
    });

    it("Select machine type", async () => {
        //Select Machine Type input
        const {machineType} = await CalculatorPage;
        await Helper.waitExist(machineType, 5000);
        await machineType.click();
        await Helper.view(machineType);

        //Select field e2-standard-8
        const {machineValue} = await CalculatorPage;
        await machineValue.waitForDisplayed();
        instanceType = await machineValue.getText();
        await machineValue.click();
    });

    //GPUs aren't available for selected machine type. 
    it.skip("Add GPUs", async () => {
        //Activate Add GPU checkbox
        const {gpuCheckBox} = await CalculatorPage
        await Helper.view(gpuCheckBox)
        await gpuCheckBox.click()

        //Select GPU type input
        const {gpuType} = await CalculatorPage
        await gpuType.click()

        //Select Nvidia V100
        const {chooseNVIDIA} = await CalculatorPage
        await Helper.view(chooseNVIDIA)
        await chooseNVIDIA.click()

        //Select GPU count input
        const {numberOfGPUs} = await CalculatorPage
        await numberOfGPUs.click()

        //Select 8 GPU count
        const {gpuCount} = await CalculatorPage
        await gpuCount.click()
    });

    it("Choose datacenter location", async () => {
        //Data center location
        const {datacenter} = await CalculatorPage;
        await datacenter.click();
        await Helper.view(datacenter);

        //Choose Frankfurt
        const {citySearchInput} = await CalculatorPage;
        await (await citySearchInput).setValue('Frankfurt');
        const city = await CalculatorPage.getCity();
        cityValue = await city.getText();

        await Helper.view(city);
        await Helper.waitVisible(city);
        await city.click();

        //Committed usage
        const {commit} = await CalculatorPage;
        await commit.click();
        const {commitOption} = await CalculatorPage;
        commitOptionValue = await commitOption.getText();

        await Helper.waitEnabled(commitOption);
        await commitOption.click();
        await Helper.view(commitOption);
    });

    //Not related to estimation
    it.skip('Should choose SSD input', async ()=>{
        //Select Local SSD input
        const {localSSD} = await CalculatorPage;
        await localSSD.click();
        await Helper.view(localSSD)    ;        

        //Choose SSD value
        const {chooseSSD} = await CalculatorPage;
        await chooseSSD.click();
        await Helper.view(chooseSSD);
    });

    it("Add to Estimate", async () => {
        //Select Estimate button
        const {estimateBtn} = await CalculatorPage;
        await Helper.waitExist(estimateBtn);
        await Helper.view(estimateBtn);
        await estimateBtn.click();
        await Helper.screenShot('button');
    });

    /*==== Assetion Checks ====*/
    it("Should have Frankfurt chosen", async () => {
        const selectedCity = await CalculatorPage.selectDivContainingText("md-list-item-text ng-binding", "Region: Frankfurt");
        expect(selectedCity).toHaveTextContaining(cityValue);
    });

    it("Should have commitment: 1 year", async () => {
        const selectedCommitment = await CalculatorPage.selectDivContainingText("md-list-item-text ng-binding", "1 Year");
        expect(selectedCommitment).toHaveTextContaining(commitOptionValue);
    });

    it("Should have Instance type selected", async () => {
        const selectedInstance = await CalculatorPage.selectDivContainingText("md-list-item-text ng-binding", "e2-standard-8");
        expect(selectedInstance).toHaveTextContaining(instanceType);
    });

    it("Email Estimate", async () => {
        //Email Estimate
        const {emailBtn} = await CalculatorPage
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
        const {sendBtn} = await CalculatorPage
        await Helper.waitEnabled(sendBtn)
        await Helper.view(sendBtn)
        await sendBtn.click()
    })

})

