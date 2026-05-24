import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Tv from 'react-native-vector-icons/MaterialIcons'
import Send from 'react-native-vector-icons/Feather'
import { CONSTANT_IMAGES } from '../../common/constantImages'
import { CONSTANT_COLOR } from '../../common/constantColors'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <Icon name="camera" size={25} color="black" />
            </View>
            <Image source={CONSTANT_IMAGES?.instagramText} style={styles.instaLogo}/>
            <View style={styles.side}>
                <View style={styles.leftIcons}>
                    <View style={{ marginRight: 20 }}>
                        <Tv name='live-tv' size={25} color="black" />
                    </View>
                    <View>
                        <Send name='send' size={25} color="black" />
                    </View>
                </View>
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
        width: '100%',
        paddingVertical:15,
  
    },
    leftIcons: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    side: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    instaLogo:{
        width: 120,
        height: 30,
        resizeMode: 'contain'
    }
})