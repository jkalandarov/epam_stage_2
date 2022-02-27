const assert = require('chai').assert
const {Cook, Calculator} = require('../app')

describe('Chef test', ()=>{
    it('check if the dish has a valid name', ()=>{
        assert.isString(Cook.checkMenu(), 'string')
    })

    it('check for a dish in a menu', ()=>{
        let dish = Cook.checkMenu()
        assert.oneOf(dish, Cook.dishes)
    })

    it('make sure the Cook can feed more', ()=>{
        for (var i = 0; i < 6; i++){
            Cook.customersFed()
            assert.isAtLeast(Cook.customers, 0)
        }
    })
})


describe('indexOf()', function(){
    it('should return -1 when the value is not present', function(){
        let array = [1,2,3]
        assert.equal(array.indexOf(4), -1)
    })
})

describe('Check calculator', function(){
    let calc = new Calculator()

    it('check if it adds values', function(){
        assert.isNumber(calc.add(4, 5), 'number')
    })

    it('check if it multiplies values', function(){
        assert.isNumber(calc.multipliy(2, 9), 'number')
    })

})