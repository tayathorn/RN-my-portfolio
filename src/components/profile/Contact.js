import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import ColorBase from '../../constants/ColorBase'

import config from '../../utils/configLayout'

const icons = {
    "cake": require('../../assets/icons/cake.png'),
    "location": require('../../assets/icons/location.png'),
    "phone": require('../../assets/icons/phone.png'),
    "email": require('../../assets/icons/email.png'),
    "github": require('../../assets/icons/github.png'),
    "medium": require('../../assets/icons/medium.png'),
}

const Contact = (props) => {

    const { data } = props

    _renderRow = (item) => {
        return(
            <View key={`${item.title}`} style={styles.itemWrapper} >
                <Image style={styles.icon} source={icons[item.icon]} />
                <Text style={styles.text} >{item.text}</Text>
            </View>
        )
    }

    return(
        <View style={[styles.container, props.style]} >
            {/* {this._renderRow()} */}
            { data.map((item) => this._renderRow(item))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: config.profile.margin,
        marginRight: config.profile.margin,
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        marginLeft: 20,
        color: ColorBase.darkGray,
        fontSize: 15
    }
})

export default Contact