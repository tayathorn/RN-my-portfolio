import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

import ProfileSectionHeader from './ProfileSectionHeader'

import ColorBase from '../../constants/ColorBase'

import config from '../../utils/configLayout'

const companyImg = {
    "thinknet": require('../../assets/images/thinknet.jpg'),
    "wealthmagik": require('../../assets/images/WealthMagik.gif'),
}

const WorkingExperience = (props) => {
    
    const { data } = props

    _renderJob = () => {
        return data.map((item) => {
            return(
                <View key={`${item.id}`} style={styles.itemContainer} >
                    <View style={styles.itemHeader} >
                        <Image style={styles.companyImg} source={companyImg[item.img]} />
                        <View style={styles.detail} >
                            <Text style={styles.header} >{item.position}</Text>
                            <Text style={styles.range} >{item.range}</Text>
                            <View style={styles.descriptionWrapper} >
                                {this._renderDescription(item.description)}
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    _renderDescription = (descriptions) => {
        return descriptions.map((item, index) => {
            return(
                <Text style={styles.descriptionText} key={`description-${index}`} >{`\u2022 ${item}`}</Text>
            )
        })
    }

    return(
        <View style={[styles.container, props.style]} >
            <ProfileSectionHeader iconName={"suitcase"} text={"Working Experience"} />
            <View style={styles.job} >
                {this._renderJob()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    job: {
        marginTop: 5,
    },
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: config.profile.margin,
    },
    itemHeader: {
        flexDirection: 'row',
    },
    companyImg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    detail: {
        marginHorizontal: 10,
        alignSelf: 'center',
        flexWrap: 'wrap',
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
    },
    range: {
        color: ColorBase.gray
    },
    descriptionWrapper: {
        marginTop: 5,
    },
    descriptionText: {
        color: ColorBase.darkGray
    }
})

export default WorkingExperience