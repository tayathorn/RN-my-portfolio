import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { navigationOptions } from './configStack'
import Setting from '../screens/Setting'

const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            ...navigationOptions,
            title: 'Setting'
        }
    }
})

export default SettingStack