import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';



const Posts = ({ post }) => {
    return (
        <View style={styles.container}>
            <Divider
                width={1}
                orientation="vertical"
            />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    }
})


export default Posts

