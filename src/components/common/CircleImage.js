import React from 'react'
import {
    Image
} from 'react-native'

const CircleImage = (props) => {
    if(props.style) {
        const { width } = props.style
        props.style.borderRadius = width / 2
    }
    
    return <Image source={props.source} style={props.style} />
}

export default CircleImage