import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Likes = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>{post.likes.toLocaleString('en')} likes</Text>
        </View>
    )
}

export default Likes

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 4,
    },
    likes: {
        color: 'white',
        fontWeight: '600',
    },
})