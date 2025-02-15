import log4js from 'log4js'

import { appenders } from './appender'

log4js.configure({
    appenders,
    categories: {
        default: { appenders: ['currentConsole', 'currentFile'], level: 'debug' }
    }
})

const logger = log4js.getLogger('default')

export default logger
