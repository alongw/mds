import { Sequelize } from 'sequelize'
import { config, logger } from '@mds/common'

const { database } = config

const getSequlize = () => {
    if (database.dialect === 'sqlite') {
        return new Sequelize({
            dialect: 'sqlite',
            storage: database.storage
        })
    }
    if (database.dialect === 'mysql') {
        return new Sequelize(
            database.mysql.database,
            database.mysql.username,
            database.mysql.password,
            {
                host: database.mysql.host,
                port: database.mysql.port,
                dialect: 'mysql'
            }
        )
    }
    logger.error('Invalid database dialect')
    throw new Error('Invalid database dialect')
}

const db = getSequlize()

export default db
