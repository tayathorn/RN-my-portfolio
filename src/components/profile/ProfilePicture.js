import React, { Component } from 'react'
import {
    StyleSheet
} from 'react-native'

import CircleImage from '../common/CircleImage'
const profilePicture = require('../../assets/images/profile_picture.jpg')

export default class ProfilePicture extends Component {
    render() {
        return(
            <CircleImage 
                source={profilePicture}
                style={{width: 100, height: 100}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    profileImage: {
        //resizeMode: Image.resizeMode.contain,
    }
})