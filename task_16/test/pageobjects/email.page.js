class Email {
    get emailAddress() {
        return $('#eposta_adres')
    }

    get emailInput() {
        return $('input[ng-model="emailQuote.user.email"]') //input[ng-model="emailQuote.user.email"]
    }
}

module.exports = new Email()