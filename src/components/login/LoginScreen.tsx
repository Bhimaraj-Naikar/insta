import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { CONSTANT_IMAGES } from '../common/constantImages'
import Button from '../common/Button'
import { CONSTANT_COLOR } from '../common/constantColors'

const LoginScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ marginVertical: 39 }}>
                    <Image source={CONSTANT_IMAGES?.instagramText} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Username or email'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.password}
                    />
                    <Text style={styles.forgotPass}>Forgot password?</Text>
                    <Button name='Log In' onPress={() => { }} disabled={false} />
                </View>
                <View style={styles.loginWithFacebook}>
                    <Image source={CONSTANT_IMAGES?.facebook} />
                    <Text style={styles.facebookText}>Log in with Facebook</Text>
                </View>
                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.signupContainer}>
                    <Text style={{ color: CONSTANT_COLOR?.grey }}>Don't have an account?</Text>
                    <Text style={{ fontWeight: '500', color: CONSTANT_COLOR?.blue }}>Sign up.</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={{color:CONSTANT_COLOR?.grey}}>Instagram or Facebook</Text>
            </View>
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputContainer: {
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d1d1ff',
        borderRadius: 5,
        height: 44,
        width: 343,
        paddingLeft: 20,
        color: '#080000ff',
    },
    password: {
        borderWidth: 1,
        borderColor: '#d1d1d1ff',
        borderRadius: 5,
        height: 44,
        width: 343,
        color: '#000000ff',
        paddingLeft: 20
    },
    forgotPass: {
        alignSelf: 'flex-end',
        color: CONSTANT_COLOR?.blue,
        fontWeight: '500'
    },
    loginWithFacebook: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        marginTop: 20
    },
    facebookText: {
        color: CONSTANT_COLOR?.blue,
        fontWeight: '600',
    },
    orContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 42
    },
    line: {
        flex: 1,
        backgroundColor: CONSTANT_COLOR?.liteGrey,
        height: 1
    },
    or: {
        color: CONSTANT_COLOR?.grey
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    bottomContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:80,
        borderTopColor:CONSTANT_COLOR?.liteGrey,
        borderTopWidth:1,
    }
})