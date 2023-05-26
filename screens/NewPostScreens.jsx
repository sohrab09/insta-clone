import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/NewPost/AddNewPost'

const NewPostScreens = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost navigation={navigation} />
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