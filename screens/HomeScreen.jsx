import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Posts from '../components/Home/Posts'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomsTabIcons } from '../components/Home/BottomTabs'
import { useEffect } from 'react'
import { db } from '../firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';


const HomeScreen = ({ navigation }) => {

    const fetchData = async () => {
        try {
            const mainCollectionRef = collection(db, 'users');
            const mainCollectionSnapshot = await getDocs(mainCollectionRef);

            mainCollectionSnapshot.forEach(async (mainDoc) => {
                const nestedCollectionRef = collection(mainDoc.ref, 'posts');
                const nestedCollectionSnapshot = await getDocs(nestedCollectionRef);

                nestedCollectionSnapshot.forEach((nestedDoc) => {
                    // console.log('Nested Document Data ------>>>>>> :', nestedDoc.data());
                });
            });
        } catch (error) {
            console.log('Error getting documents:', error);
        }
    };

    fetchData();


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