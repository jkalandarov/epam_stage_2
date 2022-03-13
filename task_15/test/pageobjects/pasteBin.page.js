class PasteBinPage {
    open() {
        return browser.url('https://pastebin.com/');
    }

    get textArea() {
        return $('#postform-text');
    }

    get expirationDropdownList() {
        return $('#select2-postform-expiration-container');
    }

    get syntaxDropDownList() {
        return $('#select2-postform-format-container');
    }
    
    chooseSyntax(syntax) {
        return $(`//li[text()="${syntax}"]`);
    }

    chooseExpirationTime(time) {
        return $(`//li[text()="${time}"]`);
    }

    get pasteNameInput() {
        return $('#postform-name');
    }

    get newPasteButton() {
        return $('.btn.-big');
    }

    pastedTitle(title) {
        return $(`=${title}`);
    }

    get expirationTime() {
        return $('.expire');
    }

    get pastedTextField() {
        return $('.textarea');
    }

    syntaxSelected(syntax) {
        return $(`//a[text()="${syntax}"]`);
    }

    get pageTitle() {
        return $('.info-top > h1');
    }
}

module.exports = new PasteBinPage();