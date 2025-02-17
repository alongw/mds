import fse from 'fs-extra'
import yaml from 'js-yaml'

import { logger } from './../../index'

import { defaultConfig, type Config } from './default'

// check if the configuration file exists
if (!fse.existsSync('./config.yaml')) {
    logger.info('No default configuration file found, creating one')
    try {
        fse.writeFileSync('./config.yaml', yaml.dump(defaultConfig))
        logger.info(
            'The configuration file has been created. Please modify it and restart the program.'
        )
        process.exit(0)
    } catch (error) {
        logger.error('Failed to create the configuration file.')
        logger.error(error)
        process.exit(1)
    }
}

// load the configuration file
const config = yaml.load(fse.readFileSync('./config.yaml', 'utf8')) as Config

export default config
