import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CONSTANT_COLOR } from '../../common/constantColors'
import { CONSTANT_IMAGES } from '../../common/constantImages'
import Icon from 'react-native-vector-icons/Entypo'
import Heart from 'react-native-vector-icons/Feather'
import Send from 'react-native-vector-icons/Feather'
import Bookmark from 'react-native-vector-icons/Feather'
import Chat from 'react-native-vector-icons/Ionicons'
// import { InstaPost } from '../../../api/InstaPost';
import { POSTS } from '../../../utils/InstaPostJson';
import ExpandableText from './Components/ExpandableText'



const Post = () => {
  // const [instaPosts, setInstaPosts] = useState<any>(null);
  // const [error, setError] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect( () => {
  //   const instaData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await InstaPost();
  //       console.log('API Response:', response);
  //       if (response?.result?.edges) {
  //         setInstaPosts(response);
  //         setError('');
  //       } else {
  //         setError('No data received from API');
  //         console.warn('Expected structure: result.edges, got:', response);
  //       }
  //     } catch (err: any) {
  //       setError(err?.message || 'Failed to fetch posts');
  //       console.error('API Error:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   instaData();
  // },[])

  // if (loading) return <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading posts...</Text>;
  // if (error) return <Text style={{ textAlign: 'center', marginTop: 20, color: 'red' }}>Error: {error}</Text>;
  // if (!instaPosts?.result?.edges) return <Text style={{ textAlign: 'center', marginTop: 20 }}>No posts available</Text>;

  // const data = instaPosts.result.edges;
  const data = POSTS?.result?.edges;
  return (

    <FlatList
      data={data || []}
      keyExtractor={(item, index) => item?.node?.id || index.toString()}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          {/* Header  */}
          <View style={styles.headerContainer}>
            <View style={styles.group}>
              <Image 
                source={{uri: item?.node?.user?.profile_pic_url}} 
                // source={{uri:'https://scontent-iev1-1.cdninstagram.com/v/t51.82787-19/587808955_18549901246053198_3144407197655235583_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43OTkuYzEifQ&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2gGGzi_R-pebrYEKv5VOcR1H9ilwStmso7eiv6iNIqkM8au8cAdh45d1LEAQLkpiorc&_nc_ohc=ih4fOQlDHT8Q7kNvwF8S6p0&_nc_gid=BvCJyL5OSs7mjZKj-rh3-A&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af4NDvuR4SCKfPxqrHq0z4_3Wh55x3Yuod6JxDN8lKRPsQ&oe=6A1607FB&_nc_sid=7a9f4b'}} 
                style={styles.profilePic}
                defaultSource={CONSTANT_IMAGES?.profilePic}
              />
              <View style={{flexDirection:'row', alignItems:'center', gap:3}}>
                <Text style={{ fontWeight: '700' }}>{item?.node?.user?.username || 'bhimaraj_2002'}</Text>
                {item?.node?.user?.is_verified && <Image source={CONSTANT_IMAGES?.verificationBadge} style={{height:15, width:15}}/>}
              </View>
            </View>
            <View>
              <Icon name="dots-three-horizontal" size={24} color="black" />
            </View>
          </View>

          {/* Post */}
          <View>
            {/* <Image source={ CONSTANT_IMAGES?.tokyo} style={styles.postImage} /> */}
            <Image source={{uri:item?.node?.image_versions2?.candidates?.[0]?.url}} style={styles.postImage} />
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

        // bottom
          <View style={styles.bottomContainer}>
            <View style={styles.bottom}>
              <Image source={CONSTANT_IMAGES?.facebook} style={styles.likeImage} />
              <Text>Liked by <Text style={{ fontWeight: '600' }}>bhimaraj_2002</Text> and <Text style={{ fontWeight: '600' }}>34,523 others</Text> </Text>
            </View>
            <View style={styles?.caption}>
              <ExpandableText
                username={item?.node?.user?.username}
                caption={item?.node?.caption?.text}
                limit={50}
              />
            </View>
          </View>
        </View>
      )}
    />
  )
}

export default Post

const styles = StyleSheet.create({
  container: {

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
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#ddd',
  },
  imgStyle: {
    height: 38,
    width: 38
  },
  postImage: {
    width: '100%',
    height: 400,
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
  caption:{
     marginHorizontal: 8,
     marginVertical: 5,
  },
  bottomContainer:{
  }
})