var Chef = function () {
    this.dishes = ['Steak', 'Tea', 'Soup', 'Burger']
    this.customers = 5
}

const Cook = new Chef()

Cook.checkMenu = function() {
    return this.dishes[Math.floor(Math.random()*this.dishes.length)]
}

Cook.customersFed = function() {
    if (this.customers >=1){
        console.log('Customer fed with yummy food')
        this.customers--
    } else if (this.customers == 0) {
        console.log('All customers are fed. Done for the day!')
    } else {
        let customersLeft = this.customers
        console.log("Customer fed with yummy food!", customersLeft , "more to go!")
        this.customers -= customersLeft
    }
    return this.customers
}


class Calculator {
    add (num1, num2) {
        return num1 + num2
    }

    multipliy (num1, num2) {
        return num1 * num2
    }
}



module.exports = { Cook, Calculator }