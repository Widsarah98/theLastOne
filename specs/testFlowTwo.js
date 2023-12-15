const { expect } = require('@wdio/globals')
const Flow = require('../pageobjects/flow')

describe('run flow2', () => {
    it('running flow 2', async () => {
        await Flow.runFlowTwo();
    })
})