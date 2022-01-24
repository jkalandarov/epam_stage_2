const assert = require('chai').assert
const {chef, Calculator} = require('../app')

describe('Chef test', ()=>{
    let cheff = chef
    
    it('check if the dish has a valid name', ()=>{
        assert.isString(cheff.checkMenu(), 'string')
    })

    it('check for a dish in a menu', ()=>{
        let dish = cheff.checkMenu()
        assert.oneOf(dish, cheff.dishes)
    })

    it('make sure the cheff can feed more', ()=>{
        for (var i = 0; i < 6; i++){
            cheff.customersFed()
            assert.isAtLeast(cheff.customers, 0)
        }
    })
})

describe('Array', function(){
    describe('indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            let array = [1,2,3]
            console.log('checking if 4 exists in ', array)
            assert.equal(array.indexOf(4), -1)
        })
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