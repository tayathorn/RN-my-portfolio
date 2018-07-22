import React from 'react'
import {
    View
} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import ProfileStack from '../navigation/ProfileStack'
import SettingStack from '../navigation/SettingStack'


export default createBottomTabNavigator({
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name="user" size={20} />
            )
        }
    },
    Setting: {
        screen: SettingStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name="cog" size={20} />
            )
        }
    },
})