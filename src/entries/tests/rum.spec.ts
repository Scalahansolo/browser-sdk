import { expect } from 'chai'
import * as sinon from 'sinon'

describe('rum module', () => {
  it('init should log an error with no rum application id', () => {
    require('../rum')

    const errorStub = sinon.stub(console, 'error')
    window.Datadog.init({ apiKey: 'yes' })
    expect(errorStub.callCount).to.eq(1)

    window.Datadog.init({ apiKey: 'yes', rumApplicationId: 'yes' })
    expect(errorStub.callCount).to.eq(1)

    sinon.restore()
  })
})