import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { navigationOptions } from './configStack'
import Profile from '../screens/Profile'

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            ...navigationOptions,
            title: 'Profile'
        }
    }
})

export default ProfileStack