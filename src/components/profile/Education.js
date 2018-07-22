import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import ProfileSectionHeader from './ProfileSectionHeader'
import config from '../../utils/configLayout'

import ColorBase from '../../constants/ColorBase'

const schoolImg = {
    "kmutt": require('../../assets/images/KMUTT.png'),
    "sw": require('../../assets/images/satriwit.jpg'),
}

const Education = (props) => {

    const { data } = props

    _renderSchool = () => {
        return data.map((item) => {
            return(
                <View key={`${item.id}`} style={styles.itemWrapper} >
                    <Image style={styles.schoolImg} source={schoolImg[item.imageName]} />
                    <View style={styles.schoolDetail} >
                        <Text style={styles.schoolHeader} >{item.school}</Text>
                        <Text>{`${item.degree}, `}
                            <Text style={styles.fieldText} >{item.field}</Text>
                        </Text>
                        <Text style={styles.yearText} >{`${item.year}, `}
                            <Text  >{`GPA: ${item.gpa}`}</Text>
                        </Text>
                        
                    </View>
                </View>
            )
        })
    }

    return(
        <View style={[styles.container, props.style]} >
            <ProfileSectionHeader iconName={"education"} text={"Education"} />
            <View style={styles.education} >
                {this._renderSchool()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    education: {
        paddingVertical: 5
    },
    itemWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: config.profile.margin,
    },
    schoolDetail: {
        marginHorizontal: 10,
        alignSelf: 'center',
        flexWrap: 'wrap',
        flex: 1,
    },
    schoolImg: {
        width: 50,
        height: 50,
    },
    schoolHeader: {
        fontWeight: 'bold',
    },
    fieldText: {
        color: ColorBase.orange,
        fontWeight: 'bold'
    },
    yearText: {
        color: ColorBase.gray
    }
})

export default Education