import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CONSTANT_IMAGES } from '../common/imagesImport'
import { CONSTANT_COLOR } from '../common/globalColors'
import Button from '../common/Button'

const ExistingAccount = () => {
    return (<>
        <View style={styles.container}>
            <View style={styles.instaLogoContainer}>
                <Image source={CONSTANT_IMAGES?.instagramText} />
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profilePic}>
                    <Image source={CONSTANT_IMAGES?.profilePic} />
                </View>
            </View>
            <Text style={styles.profileName}>Bhimaraj Naikar</Text>
            <Button
            name='Sign In'
            disabled={false}
            onPress={() => {}}
            />
            <Text style={styles.switchAccount}>Switch accounts</Text>
        </View>
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Dont have an account? <Text style={{ color: '#000000ff', fontWeight: '600' }}>Sign up.</Text> </Text>
        </View>
    </>
    )
}

export default ExistingAccount

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    instaLogoContainer: {
    },
    profileContainer: {
        marginTop: 52,
    },
    profilePic: {
        borderRadius: 50,
        height: 85,
        width: 85,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 20
    },
    buttonContainer: {
        marginVertical: 20

    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANT_COLOR?.blue,
        height: 44,
        width: 324,
        borderRadius: 7,
        marginTop: 10
    },
    profileNameText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    switchAccount: {
        fontSize: 16,
        color: '#3797EF',
        fontWeight: '500',
    },
    signUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 84,
        borderTopColor:'#cdcdcdff',
        borderTopWidth:1,

    },
    signUpText:{
        color: '#a4a4a4ff', 
        marginBottom:40 
    }
})

