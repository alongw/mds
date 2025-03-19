export interface Config {
    database: {
        dialect: 'sqlite' | 'mysql'
        storage: string
        sync: boolean
        mysql: {
            host: string
            port: number
            username: string
            password: string
            database: string
        }
    }
}

export const defaultConfig: Config = {
    database: {
        dialect: 'sqlite',
        storage: './data/database.sqlite',
        sync: true,
        mysql: {
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'database'
        }
    }
}
