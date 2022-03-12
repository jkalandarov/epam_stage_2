const PasteBinPage = require('../pageobjects/pasteBin.page');

describe("I Can Win", () => {
    let pasteText = "Hello from WebDriver";
    let pasteTitle = "helloweb";
    let selectExpiration;
    let textArea;

    it("Open pastebin page", async() => {
        await browser.url('https://pastebin.com/');
    });

    it("Create a New Paste", async () => {
        textArea = await PasteBinPage.textArea;
        await textArea.setValue(pasteText);
    });

    it("Paste Expiration: 10 Minutes", async () => {
        const {expirationDropdownList} = await PasteBinPage;
        await expirationDropdownList.click();

        selectExpiration = await PasteBinPage.chooseExpirationTime('10 Minutes');
        await selectExpiration.click();
    });

    it("Paste Title: helloweb", async () => {
        const {pasteNameInput} = await PasteBinPage;
        await pasteNameInput.setValue(pasteTitle);
    });

    it("Press 'Create New Paste' button", async () => {
        const {newPasteButton} = await PasteBinPage;
        await newPasteButton.click();
    });

    /*==== Assertion Checks ====*/

    it("Should have page title", async () => {
        const pastedPageTitle = await PasteBinPage.pastedTitle(pasteTitle);
        expect(pastedPageTitle).toHaveText(pasteTitle);
    });

    it("Should have expiration time", async () => {
        const {expirationTime} = await PasteBinPage;
        expect(expirationTime).toHaveText(selectExpiration);
    });

    it("Should have paste text inserted", async () => {
        expect(PasteBinPage.pastedTextField).toHaveText(textArea);
    });
})