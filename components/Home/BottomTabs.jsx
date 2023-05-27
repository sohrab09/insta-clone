import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomsTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/shop-local.png',
        inactive: 'https://img.icons8.com/ios/50/ffffff/shop-local.png'
    },
    {
        name: 'Profile',
        active: 'https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/328666553_724689402401065_5668862451541808429_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFMkWqsm6POgc7JpAkpRL2H8kGcYhAzll_yQZxiEDOWX_mLCSwGRUcnNkHqxXtmQgjswL-m92_OKt0WXJUGjIsd&_nc_ohc=SPFgpYSZugoAX_YBT6_&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCdOX_plM8tRHNLcYjsHLDl6EHA9Sd0UXZ0shgNwFv_Vg&oe=64728D68',
        inactive: 'https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/328666553_724689402401065_5668862451541808429_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFMkWqsm6POgc7JpAkpRL2H8kGcYhAzll_yQZxiEDOWX_mLCSwGRUcnNkHqxXtmQgjswL-m92_OKt0WXJUGjIsd&_nc_ohc=SPFgpYSZugoAX_YBT6_&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCdOX_plM8tRHNLcYjsHLDl6EHA9Sd0UXZ0shgNwFv_Vg&oe=64728D68',
    }
]

const BottomTabs = ({ icons }) => {

    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={{
                    uri: activeTab === icon.name ? icon.active : icon.inactive
                }}
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? styles.profilePicture() : null,
                    activeTab === 'Profile' && icon.name === activeTab ? styles.profilePicture(activeTab) : null
                ]}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical" />
            <View style={styles.container}>
                {
                    icons.map((icon, index) => (
                        <Icon key={index} icon={icon} />
                    ))
                }
            </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({

    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        left: 0,
        right: 0,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#000000',
        zIndex: 999,
        // flex: 1
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePicture: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        backgroundColor: '#ffffff',
    })
})   