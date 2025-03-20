import request, { type Response } from './../utils/request'

import type {
    GetTokenConfig,
    GetTokenResponse,
    UserInfoResponse,
    UserEmailResponse
} from './../types/request'

export const getToken = (config: GetTokenConfig) => {
    return request.post<GetTokenResponse>('/token', config)
}

export const getInfo = (token: string) => {
    return request.get<Response<UserInfoResponse>>('/info', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getEmail = (token: string) => {
    return request.get<Response<UserEmailResponse>>('/email', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
