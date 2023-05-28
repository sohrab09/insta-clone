import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { UserAuth } from '../../context/AuthContext'


const SignupForm = ({ navigation }) => {

    const { userSignup } = UserAuth()


    const validationSchema = Yup.object().shape({
        username: Yup.string().required('An username is required'),
        email: Yup.string().email('Invalid email').required('An email is required'),
        password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters')
    })

    const handleSubmit = async ({ email, password }) => {
        // console.log(email, password)
        try {
            await userSignup(email, password)
            console.log("Signed Up Successfully", email, password)
            navigation.navigate('HomeScreen')
        } catch (error) {
            Alert.alert(error.message)
        }
    };


    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={values => handleSubmit(values)}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                autoFocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#fff"
                                secureTextEntry={true}
                                underlineColorAndroid="transparent"
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <View style={{ alignItems: 'flex-end', marginBottom: 30, marginTop: 10 }}>
                                <TouchableOpacity>
                                    <Text style={{ color: '#ccc' }}>
                                        Forgot Password ?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Button
                                title="Signup"
                                onPress={handleSubmit}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ color: '#ccc' }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={{ color: '#00bfff', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    button: {
        marginTop: 30
    },
    textContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})