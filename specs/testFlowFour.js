const { expect } = require('@wdio/globals')
const Flow = require('../pageobjects/flow')

describe('run flow 4', () => {
    it('should run flow 4', async () => {
        await Flow.runFlowFour();
    })
})