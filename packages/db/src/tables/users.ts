import { DataTypes, Model } from 'sequelize'
import sequelize from './../index'

export interface UserAttributes {
    user_id: string
    user_name: string
    user_email: string
}

export const User = sequelize.define<Model<UserAttributes>>('User', {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
