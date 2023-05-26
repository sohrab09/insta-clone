import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PostUploader from './PostUploader'

const AddNewPost = ({ navigation }) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <PostUploader navigation={navigation} />
    </View>
)


const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }}
                style={styles.headerBackIcon}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text> </Text>
    </View>
)






export default AddNewPost

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerBackIcon: {
        width: 30,
        height: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 25
    }
}) 