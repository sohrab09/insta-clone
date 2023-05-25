import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Comments = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'gray' }}> Comments Will Here... </Text>
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