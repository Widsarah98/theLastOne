const { expect } = require('@wdio/globals')
const Flow = require('../pageobjects/flow')

describe('run flow3', () => {
    it('running flow 3', async () => {
        await Flow.runFlowThree();
    })
})