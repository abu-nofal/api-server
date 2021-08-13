'use strict';

const collection = require('../src/models/lip/collection');
describe('collection ', ()=> {
    it('constructor()', ()=> {
        let item = 'my name is ahmad';
        let customer = new collection(item);
        expect(customer.data).toEqual(item);
        
    }) 

    // it('create()',()=>{
    //     let item = 'my name is ahmad';
    //     let customer= new collection(item);
    //     let obj={
    //         name:"ahmad"
    //     }
    //     customer.create(obj);
    //     expect(customer.data.create.value).toEqual(item);

    // })
});