import React from 'react'
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    Dimensions,
    Linking,
} from 'react-native'

import ColorBase from '../../constants/ColorBase'

import service from '../../utils/service'
import configLayout from '../../utils/configLayout'
import { convertTimeStampToDateWithMonthDateYear } from '../../utils/convertDate'

const SCREEN_WIDTH = Dimensions.get('window').width;
const COVER_IMG_HEIGHT = 150

const BlogList = (props) => {

    const { data } = props

    _keyExtractor = (item) => `${item.id}`

    _renderItem = ({item}) => {
        const imgSource = `${service.baseCoverImgURL}/${SCREEN_WIDTH*2}/${COVER_IMG_HEIGHT*2}/${item.imageId}`
        
        return(
            <TouchableOpacity style={styles.wrapper} activeOpacity={1} onPress={() => this._onPressBlogItem(item.uniqueSlug)} >
                <Image
                    style={styles.coverImg} 
                    source={{
                        uri: imgSource,
                        // cache: 'only-if-cached',
                    }}
                />
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.publishDate} >{convertTimeStampToDateWithMonthDateYear(item.firstPublishedAt)}</Text>
                <Text style={styles.subtitle} >{item.subtitle}</Text>
            </TouchableOpacity>
        )
    }

    _onPressBlogItem = (uniqueSlug) => {
        const mediumScheme = 'medium://@p.tayathorn'

        const linkingURL = `${mediumScheme}/${uniqueSlug}`

        Linking.canOpenURL(linkingURL).then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + linkingURL);
            } else {
              return Linking.openURL(linkingURL);
            }
          }).catch(err => console.error('An error occurred', err));
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
    wrapper: {
        flex: 1,
        padding: configLayout.blog.margin,
        backgroundColor: configLayout.blog.backgroundColor,
        marginBottom: configLayout.blog.betweenCell,
    },
    coverImg: {
        width: SCREEN_WIDTH - (configLayout.blog.margin * 2),
        height: COVER_IMG_HEIGHT,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    publishDate: {
        fontSize: 12,
        color: ColorBase.darkGray
    },
    subtitle: {
        marginTop: 5,
        color: ColorBase.darkGray
    }
})

export default BlogList