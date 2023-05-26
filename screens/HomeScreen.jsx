import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Posts from '../components/Home/Posts'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomsTabIcons } from '../components/Home/BottomTabs'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {
                    POSTS.map((post, index) => {
                        return (
                            <Posts
                                post={post}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
            <BottomTabs icons={bottomsTabIcons} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})