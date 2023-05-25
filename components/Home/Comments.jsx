import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Comments = ({ post }) => {
    // console.log('post', JSON.stringify(post, null, 2))
    return (
        <View style={styles.container}>
            {
                !!post.comments.length && (
                    <Text style={{ color: 'gray' }}>
                        View {post.comments.length > 1 ? 'all' : ''}  {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
                    </Text>
                )
            }
        </View>
    )
}

export default Comments

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