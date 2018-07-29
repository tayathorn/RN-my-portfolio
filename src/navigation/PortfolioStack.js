import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { navigationOptions } from './configStack'
import Portfolio from '../screens/Portfolio'

const PortfolioStack = createStackNavigator({
    Portfolio: {
        screen: Portfolio,
        navigationOptions: {
            ...navigationOptions,
            title: 'Portfolio'
        }
    }
})

export default PortfolioStack