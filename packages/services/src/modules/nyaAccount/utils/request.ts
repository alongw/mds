import axios from 'axios'

import { NyaAccountConfig } from '../config'

const request = axios.create({
    baseURL: NyaAccountConfig.apiBaseUrl + '/' + NyaAccountConfig.apiVersion
})

export type Response<T = any> = {
    status: number
    msg: string
    data: T
}

export default request
