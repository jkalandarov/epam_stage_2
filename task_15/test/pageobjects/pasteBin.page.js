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
        return $('.de1');
    }
}

module.exports = new PasteBinPage();