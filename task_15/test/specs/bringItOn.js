const PasteBinPage = require('../pageobjects/pasteBin.page');
const Helper = require('../helper/helper');

describe("Bring It On", async () => {
    let pasteText = "git config --global user.name \"New Sheriff in Town\" git reset $ (git commit-tree HEAD ^ {tree} -m \"Legacy code\") + git push origin master --force";

    let selectExpiration;
    let textArea;
    let syntax = "Bash";
    let pasteTitle = "how to gain dominance among developers";

    it("Open pastebin page", async() => {
        await browser.maximizeWindow();
        await browser.url('https://pastebin.com/');
    });

    it("Create a New Paste", async () => {
        textArea = await PasteBinPage.textArea;
        await textArea.setValue(pasteText);
    });

    it("Set syntax highlighting", async () => {
        const {syntaxDropDownList} = await PasteBinPage;
        await syntaxDropDownList.click();

        const selectSyntax = await PasteBinPage.chooseSyntax(syntax);
        await selectSyntax.click();
    });

    it("Paste Expiration: 10 Minutes", async () => {
        const {expirationDropdownList} = await PasteBinPage;
        await expirationDropdownList.click();

        selectExpiration = await PasteBinPage.chooseExpirationTime('10 Minutes');
        await selectExpiration.click();
    });

    it("Paste Title: how to gain dominance among developers", async () => {
        const {pasteNameInput} = await PasteBinPage;
        await pasteNameInput.setValue(pasteTitle);
    });

    it("Press 'Create New Paste' button", async () => {
        const {newPasteButton} = await PasteBinPage;
        await Helper.view(newPasteButton);
        await newPasteButton.click();
    });

    /*=== Asserion checks ===*/

    it("Should have page title", async () => {
        const pastedPageTitle = await PasteBinPage.pastedTitle(pasteTitle);
        expect(pastedPageTitle).toHaveText(pasteTitle);
    });

    it("Syntax is suspended for bash", async () => {
        const syntaxSelected = await PasteBinPage.syntaxSelected('Bash');
        expect(syntaxSelected).toHaveTextContaining(syntax);
    });

    it("Check that the code matches the one entered in paragraph 2", async () => {
        let {pastedTextField} = await PasteBinPage;
        await Helper.waitForElement(pastedTextField);
        expect(pastedTextField).toHaveValueContaining(pasteText);
    });
});