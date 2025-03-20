export interface GetTokenConfig {
    grant_type: string
    code: string
    redirect_uri: string
    client_id: string
    client_secret: string
    type?: string
}

export interface GetTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    scope: string
}
