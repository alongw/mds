export type InitNyaAccountConfig = {
    client_id: string
    client_secret: string
}

export type GetUserTokenConfig = {
    state: string
    redirect_uri: string
    scope: string
    response_type: string
}

export type GetStateConfig = {
    userIp: string
    userAgent: string
}
