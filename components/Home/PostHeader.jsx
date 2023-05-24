import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';


const PostHeader = ({ post }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image
                    style={styles.postImage}
                    source={{
                        uri: post.profile_picture
                    }}
                />
                <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 5 }}>
                    {post.user}
                </Text>
            </View>
            {/* <Text style={{ color: '#fff', fontWeight: 'bold' }}> */}
            <Entypo name="dots-three-horizontal" size={24} color="#fff" />
            {/* </Text> */}
        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    postImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        resizeMode: 'cover',
        borderColor: 'orange',
        borderWidth: 2
    },
})