import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { navigationOptions } from './configStack'

import Blog from '../screens/Blog'

const BlogStack = createStackNavigator({
    Blog: {
        screen: Blog,
        navigationOptions: {
            ...navigationOptions,
            title: 'Blog'
        }
    }
})

export default BlogStack