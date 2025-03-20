// Write the test code here

import { logger } from '@mds/common'

import { NyaAccount } from '@mds/services'

logger.info('Hello World!')

const nya = new NyaAccount({
    client_id: '123',
    client_secret: '456',
    redirect_uri: 'http://localhost:3000'
})

const state = await nya.getStateCode({
    userIp: '',
    userAgent: ''
})

console.log(`State code: ${state}`)

export default {}
