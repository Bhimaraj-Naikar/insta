import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CONSTANT_IMAGES } from '../../common/imagesImport'
import Icon from 'react-native-vector-icons/Feather'
import { CONSTANT_COLOR } from '../../common/globalColors'

const StorySection = () => {
  const stories = [
    { id: 1, name: 'RJ', img: 'https://picsum.photos/seed/rj/100' },
    { id: 2, name: 'Alex', img: 'https://picsum.photos/seed/alex/100', live: true },
    { id: 3, name: 'Maya', img: 'https://picsum.photos/seed/maya/100' },
    { id: 4, name: 'Sam', img: 'https://picsum.photos/seed/sam/100' },
    { id: 5, name: 'Chris', img: 'https://picsum.photos/seed/chris/100' },
    { id: 6, name: 'Lina', img: 'https://picsum.photos/seed/lina/100' },
    { id: 7, name: 'Omar', img: 'https://picsum.photos/seed/omar/100' },
    { id: 8, name: 'Zoe', img: 'https://picsum.photos/seed/zoe/100' },
    { id: 9, name: 'Nina', img: 'https://picsum.photos/seed/nina/100' },
    { id: 10, name: 'Leo', img: 'https://picsum.photos/seed/leo/100' },
  ]


  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={item => item?.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.storyContainer}>
            <ImageBackground
              source={CONSTANT_IMAGES?.storyBorder}
              style={styles.border}
            >
              <Image source={{ uri: item?.img }} style={styles.storyImage} />
              {
                item?.id === 1 && 
                <View style={styles.plus}>
                <Icon name='plus' size={13} color="#fff" />
              </View>
              }
              {
                item?.live === true && 
                <View style={styles.live}>
                  <View style={styles.liveRed}>
                    <Text style={styles.liveText}>Live</Text>
                  </View>
              </View>
              }
            </ImageBackground>
            <Text>{item?.name &&  item?.name?.length > 8 ? item?.name.slice(0, 8) + "..." : item?.name }</Text>
          </View>
        )}
      />
    </View>
  )
}

export default StorySection

const styles = StyleSheet.create({
  container:{
    borderBottomColor:CONSTANT_COLOR?.liteGrey,
    borderBottomWidth:0.5,
    borderTopColor:CONSTANT_COLOR?.liteGrey,
    borderTopWidth:0.5,
    paddingVertical:5
  },
  border: {
    height: 90,
    width: 90,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  storyImage: {
    height: 78,
    width: 78,
    borderRadius: 39,
  },
  plus: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    backgroundColor: CONSTANT_COLOR?.blue,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  live:{
    alignItems:'center',
    justifyContent:'center'
  },
  liveImage:{
    position:'absolute',
  },
  liveRed:{
    height:22,
    width:34,
    position:'absolute',
    backgroundColor:'#da1550',
    borderColor:'#fafafa',
    borderWidth:3,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  liveText:{
    fontSize:10,
    fontWeight:'500',
    color:CONSTANT_COLOR?.white,
  },
  storyContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
})