import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Contact from './Contact'
import Education from './Education'
import WorkingExperience from './WorkingExperience'

import config from '../../utils/configLayout'

const ProfileBody = (props) => {

    const { contact, education, work_history } = props.data

    return(
        <View style={styles.container}>
            <Contact style={styles.basedBackground} data={contact} />
            <Education style={[styles.basedBackground, styles.section]} data={education} />
            <WorkingExperience style={[styles.basedBackground, styles.section]} data={work_history} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    basedBackground: {
        backgroundColor: config.profile.backgroundColor
    },
    section: {
        marginTop: 10,
    }
    
})

export default ProfileBody