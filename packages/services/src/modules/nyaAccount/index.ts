import type { InitNyaAccountConfig, GetUserTokenConfig, GetStateConfig } from './types'

import { NyaAccountConfig } from './config'

import { getStateCode as getStateCodeTool } from './utils/state'

import { getUserEmail, getUserNormalInfo, getUserToken } from './modules/userInfo'

export class NyaAccount {
    #client_id: string
    #client_secret: string
    #redirect_uri: string

    constructor(config: InitNyaAccountConfig) {
        this.#client_id = config.client_id
        this.#client_secret = config.client_secret
        this.#redirect_uri = config.redirect_uri
    }

    getStateCode(user: GetStateConfig) {
        return getStateCodeTool(user.userIp, user.userAgent)
    }

    getUserGetTokenRedirectUrl(config: GetUserTokenConfig) {
        const urlParams = new URLSearchParams({ client_id: this.#client_id, ...config })
        return `${NyaAccountConfig.baseUrl}/authorize?${urlParams}`
    }

    getAccessToken(code: string) {
        const config = {
            client_id: this.#client_id,
            client_secret: this.#client_secret,
            code,
            grant_type: 'authorization_code',
            redirect_uri: this.#redirect_uri
        }
        return getUserToken(config)
    }

    getUserInfo(token: string) {
        return getUserNormalInfo(token)
    }

    getUserEmail(token: string) {
        return getUserEmail(token)
    }
}
