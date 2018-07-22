import React from 'react'
import {
    View
} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import ProfileStack from '../navigation/ProfileStack'
import SettingStack from '../navigation/SettingStack'


export default createBottomTabNavigator({
    Profile: ProfileStack,
    Setting: SettingStack
})