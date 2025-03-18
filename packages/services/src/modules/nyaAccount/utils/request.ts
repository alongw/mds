import axios from 'axios'

import { NyaAccountConfig } from '../config'

const request = axios.create({
    baseURL: NyaAccountConfig.baseUrl
})
