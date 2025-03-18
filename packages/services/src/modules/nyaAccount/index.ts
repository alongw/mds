import type { InitNyaAccountConfig, GetUserTokenConfig, GetStateConfig } from './types'

import { NyaAccountConfig } from './config'

import { getStateCode as getStateCodeTool } from './utils/state'

export class NyaAccount {
    #client_id: string
    #client_secret: string

    constructor(config: InitNyaAccountConfig) {
        this.#client_id = config.client_id
        this.#client_secret = config.client_secret
    }

    getStateCode(user: GetStateConfig) {
        return getStateCodeTool(user.userIp, user.userAgent)
    }

    getUserGetTokenRedirectUrl(config: GetUserTokenConfig) {
        const urlParams = new URLSearchParams({ client_id: this.#client_id, ...config })
        return `${NyaAccountConfig.baseUrl}/authorize?${urlParams}`
    }
}
