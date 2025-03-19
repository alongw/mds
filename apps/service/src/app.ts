import { config } from '@mds/common'
import { syncDatabase } from '@mds/db'

if (config.database.sync) {
    await syncDatabase()
}

import('./__test__')
