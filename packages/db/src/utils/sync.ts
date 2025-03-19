import db from './db'
import { logger } from '@mds/common'

import './../export'

export const syncDatabase = async () => {
    logger.info('[DATABASE] Start to sync database')
    try {
        await db.sync({ alter: true })
        logger.info('[DATABASE] Database sync success')
    } catch (error) {
        logger.error('[DATABASE] Database sync failed')
        logger.error(error)
        process.exit(0)
    }
}
