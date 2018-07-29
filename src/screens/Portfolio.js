import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import ColorBase from '../constants/ColorBase'

import ShowCaseList from '../components/portfolio/ShowCaseList'

import portfoliodata from '../data/portfoliodata.json'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        let { portfolio } = portfoliodata

        this.state = {
            portfolioData: portfolio
        }
    }

    render() {
        const { portfolioData } = this.state
        return(
            <View style={styles.container}>
                <ShowCaseList data={portfolioData} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorBase.lightGray,
    }
})