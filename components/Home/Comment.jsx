import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Comment = ({ post }) => {
    return (
        <View style={styles.container}>
            {
                post.comments.map((comment, index) => {
                    return (
                        <Text style={{ color: 'white' }} key={index}>
                            {comment.user} {'  '} {comment.comment}
                        </Text>
                    )
                })
            }
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
})