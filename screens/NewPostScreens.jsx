import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/NewPost/AddNewPost'

const NewPostScreens = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreens

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})