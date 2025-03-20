import request from './../utils/request'

import type { GetTokenConfig, GetTokenResponse } from './../types/request'

export const getToken = (config: GetTokenConfig) => {
    return request.post<GetTokenResponse>('/token', config)
}
