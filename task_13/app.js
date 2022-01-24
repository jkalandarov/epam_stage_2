var Chef = function () {
    this.dishes = ['Steak', 'Tea', 'Soup', 'Burger']
    this.customers = 5
}

Chef.prototype.checkMenu = function() {
    let dish = this.dishes[Math.floor(Math.random()*this.dishes.length)]
    // console.log("I'd like to have ", dish)
    return dish
}

Chef.prototype.customersFed = function() {
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

let chef = new Chef()


class Calculator {
    constructor (input1, input2) {
        this.num1 = parseInt(input1)
        this.num2 = parseInt(input2)
    }

    add (num1, num2) {
        return this.num1 + this.num2
    }

    multipliy (num1, num2) {
        return this.num1 * this.num2
    }
}



module.exports = { chef, Calculator }