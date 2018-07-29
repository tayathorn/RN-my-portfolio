import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    Dimensions,
    Text,
} from 'react-native'

import config from '../../utils/configLayout'
import ColorBase from '../../constants/ColorBase';

const showcaseImgs = {
    "mapmagic": require('../../assets/images/mapmagic_showcase.png'),
    "jobthai": require('../../assets/images/jobthai_showcase.png'),
    "pinsspace": require('../../assets/images/pinsspace_showcase.png')
}

const techImg = {
    "rn": require('../../assets/images/react_native_logo.png'),
    "firebase": require('../../assets/images/firebase_logo.png'),
    "node": require('../../assets/images/node_js_logo.png'),
    "graphQL": require('../../assets/images/graphql_logo.png'),
    "mapbox": require('../../assets/images/mapbox_logo.png')
}

const frameWidth = Dimensions.get('window').width;


const ShowCaseList = (props) => {
    const { data } = props
    const imgRatio = { w:4, h:3 }

    _keyExtractor = (item) => `${item.id}`

    const imgSize = {
        width: frameWidth,
        height: (frameWidth / imgRatio.w) * imgRatio.h
    }

    _renderTechImg = (techs) => {
        return techs.map((tech, index) => <Image key={`img-tech-${index}`} style={styles.techImg} source={techImg[tech]} />)
    }

    _renderItem = ({item}) => {
        return(
            <View style={styles.itemContainer} >
                <View style={styles.itemWrapper} >
                    <Text style={styles.title} >{item.title}</Text>
                    <Text style={styles.description} >{item.description}</Text>
                    <Image style={[styles.showcaseImg, imgSize]} source={showcaseImgs[item.name]} />
                    <View style={styles.techWrapper} >
                        {this._renderTechImg(item.tech)}
                    </View>
                </View>
            </View>
        )
    }

    return(
        <FlatList 
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
    },
    itemWrapper: {
        flex: 1,
        backgroundColor: config.portfolio.backgroundColor,
        // paddingTop: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: config.portfolio.margin,
        color: ColorBase.darkGray,
    },
    description: {
        color: ColorBase.gray,
        paddingHorizontal: config.portfolio.margin,
        paddingBottom: config.portfolio.margin,
    },
    showcaseImg: {
        resizeMode: 'contain'
    },
    techWrapper: {
        padding: config.portfolio.margin,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    techImg: {
        width: 100,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10,
        // backgroundColor: 'pink'
    }
})

export default ShowCaseList