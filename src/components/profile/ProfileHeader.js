import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import ColorBase from '../../constants/ColorBase'
import ProfilePicture from './ProfilePicture'

const ProfileHeader = (props) => {
    const { name, position } = props.data
    return(
        <View style={[styles.container, props.style]}>
            <ProfilePicture style={styles.profilePicture}/>
            <Text style={[styles.textBase, styles.name]} >{name}</Text>
            <Text style={[styles.textBase, styles.position]}>{position}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicture: {
        width: 150,
        height: 150,
    },
    textBase: {
        fontFamily: 'Helvetica',
        marginTop: 10,
        color: ColorBase.darkGray
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    position: {
        fontSize: 16,
    }
})

export default ProfileHeader