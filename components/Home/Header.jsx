import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'


const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/InstagramLogo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadMessage}>
                        <Text style={styles.unreadMessageText}>5</Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 10,
        resizeMode: 'contain',
        height: 30,
        width: 30,
        color: 'white'
    },
    unreadMessage: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 20,
        width: 25,
        height: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    unreadMessageText: {
        color: 'white',
        fontWeight: 'bold',
    }
}) 