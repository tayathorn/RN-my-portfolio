import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    Dimensions,
} from 'react-native'

const showcaseImgs = {
    "mapmagic": require('../../assets/images/mapmagic_showcase.png'),
    "jobthai": require('../../assets/images/jobthai_showcase.png'),
    "pinsspace": require('../../assets/images/pinsspace_showcase.png')
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

    _renderItem = ({item}) => {
        return(
            <View style={{ flex: 1}} >
                <Image style={[styles.showcaseImg, imgSize]} source={showcaseImgs[item.name]} />
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
    showcaseImg: {
        // width: 200,
        // height: null,
        resizeMode: 'contain'
    }
})

export default ShowCaseList