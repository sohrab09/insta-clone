import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const LoginForm = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('An email is required'),
        password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters')
    })


    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Username or Email"
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
                                title="Login"
                                onPress={handleSubmit}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ color: '#ccc' }}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#00bfff', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default LoginForm

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