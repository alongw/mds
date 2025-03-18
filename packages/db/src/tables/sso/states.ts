import { DataTypes, Model } from 'sequelize'
import sequelize from '../../index'

export interface SSO_StateAttributes {
    state_id: string
    state_code: string
    state_scope: string
    state_expires: number
}

export const SSO_State = sequelize.define<Model<SSO_StateAttributes>>('Channel', {
    state_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    state_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_scope: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_expires: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
