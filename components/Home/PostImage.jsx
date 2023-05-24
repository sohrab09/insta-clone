import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostImage = ({ post }) => {
    // console.log("post ----->>>>> ", post)
    return (
        <View style={{ width: '100%', height: 400 }}>
            <Image
                style={styles.postImage}
                source={{
                    uri: post.imageUrl
                }}
            />
        </View>
    )
}

export default PostImage

const styles = StyleSheet.create({
    postImage: {
        height: '100%',
        resizeMode: 'cover',
    },
})