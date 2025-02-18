import { DataTypes, Model } from 'sequelize'
import sequelize from './../index'

export interface ChannelAttributes {
    channel_id: string
    channel_name: string
    channel_type: string
    channel_url: string
    channel_owner: string
}

export const Channel = sequelize.define<Model<ChannelAttributes>>('Channel', {
    channel_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    channel_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channel_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channel_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    channel_owner: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
