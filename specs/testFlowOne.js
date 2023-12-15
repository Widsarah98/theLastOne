const { expect } = require('@wdio/globals')
const Flow = require('../pageobjects/flow')

describe('run flow1', () => {
    it('running flow 1', async () => {
        await Flow.runFlowOne();
    })
})

// describe('run a negative login test on flow1', () => {
//     it('should give me an error message when invalid password is used', async () => {
//         await Flow.runFlowOneNegative();
//     })
// })

// describe('run a negative login test on flow1 using wrong email', () => {
//     it('should give me an error message when invalid email is used', async () => {
//         await Flow.runFlowOneWrongEamil();
//     })
// })