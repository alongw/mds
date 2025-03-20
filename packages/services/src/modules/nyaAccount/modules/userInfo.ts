import { logger } from '@mds/common'
import { getEmail, getInfo, getToken } from './../apis/index'
import type { GetTokenConfig } from './../types/request'

export const getUserToken = async (config: GetTokenConfig) => {
    try {
        const result = await getToken(config)
        if (result.status !== 200 || !result.data.access_token) {
            return null
        }
        return result.data
    } catch (error) {
        logger.warn(`[SERVICE] [NYA_ACCOUNT] [GET_USER_TOKEN] ${error.message}`)
        return null
    }
}

export const getUserNormalInfo = async (token: string) => {
    try {
        const { data: result } = await getInfo(token)
        if (result.status !== 200 || !result.data) {
            return null
        }
        return result.data
    } catch (error) {
        logger.warn(`[SERVICE] [NYA_ACCOUNT] [GET_USER_INFO] ${error.message}`)
        return null
    }
}

export const getUserEmail = async (token: string) => {
    try {
        const { data: result } = await getEmail(token)
        if (result.status !== 200 || !result.data) {
            return null
        }
        return result.data
    } catch (error) {
        logger.warn(`[SERVICE] [NYA_ACCOUNT] [GET_USER_EMAIL] ${error.message}`)
        return null
    }
}
