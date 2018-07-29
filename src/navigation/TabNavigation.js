import React from 'react'
import {
    View
} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import ProfileStack from './ProfileStack'
import PortfolioStack from './PortfolioStack'
import BlogStack from './BlogStack'

import ColorBase from '../constants/ColorBase';


export default createBottomTabNavigator({
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user" size={23} color={tintColor} />
            )
        }
    },
    Portfolio: {
        screen: PortfolioStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="book" size={23} color={tintColor} />
            )
        }
    },
    Blog: {
        screen: BlogStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="newspaper-o" size={23} color={tintColor} />
            )
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: ColorBase.pink,
    }
})