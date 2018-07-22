import React, { Component } from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'

import ColorBase from '../constants/ColorBase'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileBody from '../components/profile/ProfileBody'

import config from '../utils/configLayout'

import profiledata from '../data/profiledata.json'

export default class Profile extends Component {

    constructor(props) {
        super(props)

        let { name, surname, position, contact, bio, education, work_history } = profiledata.profile

        this.state = {
            name: `${name.toUpperCase()} ${surname.toUpperCase()}`,
            position: position.toUpperCase(),
            bio,
            contact,
            education,
            work_history,
        }

    }

    componentDidMount() {
        
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.profileHeader} >
                    <ProfileHeader data={this.state} />
                </View>
                <View style={styles.profileBody} >
                    <ProfileBody style={styles.profileBody} data={this.state} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorBase.lightGray,
    },
    profileHeader: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: config.profile.backgroundColor
    },
    profileBody: {
        flex: 2,
        marginTop: 1
    }
})