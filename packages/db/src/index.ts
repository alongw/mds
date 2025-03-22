import db from './utils/db'
import { syncDatabase } from './utils/sync'

export * from './export'

import('./assocs')
import('./utils/sync')

// export default db
export { db as sequelize, syncDatabase }
