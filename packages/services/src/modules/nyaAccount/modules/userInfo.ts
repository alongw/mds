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
        return null
    }
}

export const getUserInfo = (token: string) => {
    const getUserNormalInfo = async () => {}

    return {}
}
