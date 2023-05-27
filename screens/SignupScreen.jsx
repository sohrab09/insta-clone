import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import SignupForm from '../components/Signup/SignupForm'

const INSTAGRAM_LOGO = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
            </View>
            <SignupForm navigation={navigation} />
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        width: 100,
        height: 100
    }
})