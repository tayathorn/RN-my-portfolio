import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import axios from 'axios'

import BlogList from '../components/blog/BlogList'

export default class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        axios.get('https://medium.com/@p.tayathorn/latest?format=json')
            .then((response) => {
                const result = JSON.parse(response.data.replace("])}while(1);</x>", ""))

                const { success } = result
                if (success) {
                    const { Post } = result.payload.references
                    const myPostIds = Object.keys(Post)

                    this.getPostList(Post, myPostIds)

                }
            })
    }

    getPostList = (posts, postIds) => {

        let tempPostList = []

        postIds.map((postId) => {
            const post = posts[postId]
            const { imageId } = post.virtuals.previewImage
            const { subtitle } = post.virtuals
            const { id, title, uniqueSlug, firstPublishedAt } = post
            const postItem = {
                id,
                firstPublishedAt,
                title,
                subtitle,
                uniqueSlug,
                imageId
            }
            tempPostList.push(postItem)
        })

        this.setPostList(tempPostList)
    }

    setPostList = postList => {
        this.setState({
            postList
        })
    }

    render() {
        return(
            <View style={styles.container} >
                <BlogList data={this.state.postList} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})