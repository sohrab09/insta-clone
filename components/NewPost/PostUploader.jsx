import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url';
import { db } from '../../firebase'
import { UserAuth } from '../../context/AuthContext';
import { collection, getDocs, doc, addDoc } from 'firebase/firestore';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('Image URL is required'),
    caption: Yup.string().max(2200, 'Caption has a max of 2200 characters').required('Caption is required'),
});

const PLACEHOLDERIMAGE = 'https://img.icons8.com/ios/50/ffffff/image--v1.png'


const PostUploader = ({ navigation }) => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDERIMAGE);
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [userId, setUserId] = useState(null);

    const { user } = UserAuth()

    const fetchUsernames = async () => {
        try {
            if (user) {
                const uid = user.uid;
                const loggedUser = collection(db, "users");
                const getUser = await getDocs(loggedUser);
                const userInfo = getUser.forEach((user) => {
                    if (user.data().owner_uid === uid) {
                        setCurrentUser(user.data().username)
                        setUserProfile(user.data().profile_pic)
                        setUserId(user.owner_uid)
                    }
                });

                return userInfo;

            } else {
                console.log("No user logged in")
            }
        } catch (error) {
            console.log('Error getting usernames:', error);
        }
    };

    // console.log("User Name Function ------->>>>> ", fetchUsernames());

    useEffect(() => {
        fetchUsernames()
    }, []);

    const uploadPost = async (caption, imageUrl) => {
        try {
            const userDocRef = collection(db, "users")

            console.log("Ref ---------->>>>>>>> ", userDocRef);

            // const postsCollectionRef = collection(userDocRef, "posts");

            // await addDoc(postsCollectionRef, {
            //     owner_uid: userId,
            //     username: currentUser,
            //     profile_pic: userProfile,
            //     imageUrl: imageUrl,
            //     caption: caption,
            //     createdAt: new Date().toISOString(),
            //     likesCount: 0,
            //     commentsCount: 0,
            // })

            // console.log("Document upload successfully")

            // await addDoc(post, {
            //     owner_uid: user.uid,
            //     username: currentUser,
            //     profile_pic: userProfile,
            //     imageUrl: imageUrl,
            //     caption: caption,
            //     createdAt: new Date().toISOString(),
            //     likesCount: 0,
            //     commentsCount: 0,
            // });
            // console.log("Document upload ")
        } catch (error) {
            console.log('Error uploading post:', error);
        }
    };
    https://randomuser.me/api/portraits/women/9.jpg

    return (
        <Formik
            initialValues={{
                imageUrl: '',
                caption: '',
            }}
            onSubmit={values => {
                // console.log("Values ---->>>>>> ", values)
                uploadPost(values.caption, values.imageUrl)
                // navigation.goBack()
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