import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import ColorBase from '../../constants/ColorBase';

import config from '../../utils/configLayout'

const icons = {
    "education": require('../../assets/icons/education.png'),
    "suitcase": require('../../assets/icons/suitcase.png')
}

const ProfileSectionHeader = (props) => {
    const { iconName, text } = props
    return(
        <View style={styles.container} >
            <View style={styles.wrapper} >
                <Image style={styles.logo} source={icons[iconName]} />
                <Text style={styles.header} >{text}</Text>
            </View>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: config.profile.margin,
    },
    logo: {
        width: 30,
        height: 30,
    },
    header: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: ColorBase.lightGray
    }
})

export default ProfileSectionHeader