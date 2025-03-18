import { logger } from '@mds/common'

import { sso } from '@mds/db'
import { v4 } from 'uuid'
import dayjs from 'dayjs'

export const getStateCode = async (userIp: string, userAgent: string) => {
    const state_id = v4()
    const state_code = v4()
    const state_scope = 'nya_account_user_login'
    const state_expires = dayjs().add(10, 'minute').unix()
    const user_ip = userIp
    const user_agent = userAgent

    logger.info(
        `[SERVICES] [NYA_ACCOUNT] User IP: ${userIp} | User Agent: ${userAgent} Has been created state code: ${state_code}`
    )

    try {
        await sso.SSO_State.create({
            state_id,
            state_code,
            state_scope,
            state_expires,
            user_ip,
            user_agent
        })
        return state_code
    } catch (error) {
        logger.error(
            `[SERVICES] [NYA_ACCOUNT] Database error when create state code: ${state_code}, ${error}`
        )
        return null
    }
}
