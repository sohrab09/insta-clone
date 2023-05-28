import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignInStack, SignOutStack } from './Navigation'
import { UserAuth } from './context/AuthContext'


const AuthNavigation = () => {

    const { user } = UserAuth()


    const currentUser = user

    return (
        <>
            {currentUser ? <SignInStack /> : <SignOutStack />}
        </>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})