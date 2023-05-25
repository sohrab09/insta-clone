import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'


const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png',
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v1.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/metro/60/ffffff/paper-plane.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/ios/50/ffffff/bookmark-ribbon--v1.png',
    }
];

const PostFooter = () => (

    <View style={styles.footer}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
)



const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image
            source={{ uri: imgUrl }}
            style={imgStyle}
        />
    </TouchableOpacity>
)

export default PostFooter

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '35%',
        justifyContent: 'space-between',
    }
})