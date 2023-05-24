import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'



const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    USERS.map((story, index) => {
                        return (
                            <View style={styles.story} key={index}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.storyImage}
                                        source={{
                                            uri: story.image
                                        }}
                                    />
                                    <Text style={styles.storyName}>
                                        {
                                            story.user.length > 10 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()
                                        }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    story: {
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: 'cover',
        borderColor: 'orange',
        borderWidth: 2
    },
    storyName: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

}) 