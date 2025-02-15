import { Appender } from 'log4js'

import { LoggerPath } from './path'

export const appenders: { [name: string]: Appender } = {
    currentConsole: {
        type: 'stdout',
        layout: {
            type: 'pattern',
            pattern: '[%d{MM/dd hh:mm:ss}] [%[%p%]] %m'
        }
    },
    currentFile: {
        type: 'file',
        filename: LoggerPath.CURRENT_LOG,
        layout: {
            type: 'pattern',
            pattern: '%d %p %m'
        }
    }
}
