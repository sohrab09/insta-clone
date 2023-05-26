import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url';


const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('Image URL is required'),
    caption: Yup.string().max(2200, 'Caption has a max of 2200 characters').required('Caption is required'),
});

const PLACEHOLDERIMAGE = 'https://img.icons8.com/ios/50/ffffff/image--v1.png'


const PostUploader = ({ navigation }) => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDERIMAGE)

    return (
        <Formik
            initialValues={{
                imageUrl: '',
                caption: '',
            }}
            onSubmit={values => {
                console.log("Values ---->>>>>> ", values)
                navigation.goBack()
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                            source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDERIMAGE }}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 15 }}>
                            <TextInput
                                placeholder='Write a caption...'
                                placeholderTextColor='#fff'
                                multiline={true}
                                style={{
                                    color: '#fff',
                                    fontSize: 16
                                }}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider
                        width={1}
                        orientation='vertical'
                    />
                    <TextInput
                        placeholder='Add an image URL...'
                        placeholderTextColor='#fff'
                        autoCapitalize='none'
                        style={{
                            color: '#fff',
                            fontSize: 16
                        }}
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && <Text style={{ color: 'red' }}>{errors.imageUrl}</Text>}

                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <Button title='Post' onPress={handleSubmit} disabled={!isValid} />
                    </View>
                </>
            }
        </Formik>
    )
}

export default PostUploader

const styles = StyleSheet.create({})