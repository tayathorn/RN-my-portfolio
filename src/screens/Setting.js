import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import ColorBase from '../constants/ColorBase'

export default class Setting extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorBase.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    }
})