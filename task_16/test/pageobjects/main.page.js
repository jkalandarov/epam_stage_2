class Main {
    open(){
        return browser.url('/')
    }

    get searchBtn () {
        return $('.devsite-searchbox > input')
    }

    get query() {
        return 'Google Cloud Platform Pricing Calculator'
    }

    get searchResult() {
        return $(`a=${this.query}`)
    }

    get computeEngineTab() {
        return $('md-tab-item[class="md-tab ng-scope ng-isolate-scope md-ink-ripple md-active"]')
    }

    get instanceInput() {
        return $('input[ng-model="listingCtrl.computeServer.quantity"]')
    }

    get machineType() {
        return $('md-select[ng-model="listingCtrl.computeServer.instance"]')
    }

    get machineValue() {
        return $('md-option[value="CP-COMPUTEENGINE-VMIMAGE-E2-STANDARD-8"]') //div[contains(., "e2-standard-8")]
    }

    get gpuCheckBox() {
        return $('md-checkbox[ng-model="listingCtrl.soleTenant.addGPUs"]')
    }

    get gpuType() {
        return $('md-select[ng-model="listingCtrl.soleTenant.gpuType"]')
    }

    get chooseNVIDIA() {
        return $('//div[contains(., "Tesla V100")]') //md-option[value="NVIDIA_TESLA_V100"]
    }

    get numberOfGPUs() {
        return $('md-select[ng-model="listingCtrl.soleTenant.gpuCount"]')
    }

    get gpuCount() {
        return $('md-option[value="8"]')
    }

    get datacenter() {
        return $('md-select[ng-model="listingCtrl.computeServer.location"]')
    }

    get city() {
        return $$('md-option[value="europe-west3"]')[2]  //$('md-option[value="europe-west2"]')
    }

    get commit() {
        return $('md-select[ng-model="listingCtrl.computeServer.cud"]')
    }

    get commitOption() {
        return $$('md-option[ng-value="1"]')[1]
    }

    get localSSD() {
        return $('md-select[ng-model="listingCtrl.soleTenant.ssd"]')
    }

    get chooseSSD() {
        return $('//div[contains(., "24")]') //md-option[ng-value="24"]
    }

    get estimateBtn() {
        return $('form[name="ComputeEngineForm"] > div > button')
    }

    get emailBtn() {
        return $('button[id="email_quote"]')
    }

    get sendBtn() {
        return $('button[ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]')
    }
}

module.exports = new Main()