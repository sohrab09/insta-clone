import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Caption = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.caption}> {post.user}</Text>
            <Text style={{ color: 'white', marginLeft: 5 }}> {post.caption}</Text>
        </View>
    )
}

export default Caption

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
    },
    caption: {
        color: 'white',
        fontWeight: '600',
    },
})