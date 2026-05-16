import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CONSTANT_COLOR } from '../common/globalColors'
import { CONSTANT_IMAGES } from '../common/imagesImport'
import Icon from 'react-native-vector-icons/Entypo'
import Heart from 'react-native-vector-icons/Feather'
import Send from 'react-native-vector-icons/Feather'
import Bookmark from 'react-native-vector-icons/Feather'
import Chat from 'react-native-vector-icons/Ionicons'

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.headerContainer}>
        <View style={styles.group}>
          <Image source={CONSTANT_IMAGES?.profilePic} style={styles.imgStyle} />
          <View>
            <Text style={{ fontWeight: '700' }}>Joshuah_12</Text>
            <Text>Tokyo, Japan</Text>
          </View>
        </View>
        <View>
          <Icon name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>


      {/* Post */}
      <View>
        <Image source={CONSTANT_IMAGES?.tokyo} style={styles.postImage} />
      </View>


      {/* cta  */}
      <View style={styles.ctaContainer}>
        <View style={styles.ctas}>
          <Heart name="heart" size={24} color="black" />
          <Chat name="chatbubble-outline" size={24} color="black" />
          <Send name="send" size={24} color="black" />
        </View>
        <View>
          <Bookmark name="bookmark" size={24} color="black" />
        </View>
      </View>

      {/* bottom  */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottom}>
          <Image source={CONSTANT_IMAGES?.facebook} style={styles.likeImage} />
          <Text>Liked by <Text style={{ fontWeight: '600' }}>bhimaraj_2002</Text> and <Text style={{ fontWeight: '600' }}>34,523 others</Text> </Text>
        </View>
        <View style={{marginHorizontal:5}}>
          <Text> <Text style={{ fontWeight: '600' }}> joshua_l </Text>The game in Japan was amazing and I want to share some photos. The game in Japan was amazing and I want to share some photos.</Text>
        </View>
      </View>

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: {
    // marginHorizontal:5,

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  imgStyle: {
    height: 38,
    width: 38
  },
  postImage: {
    width: '100%'
  },
  ctaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 8
  },
  ctas: {
    flexDirection: 'row',
    gap: 8
  },
  likeImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginHorizontal: 8,
    marginVertical: 5
  },
  bottomContainer: {

  }
})