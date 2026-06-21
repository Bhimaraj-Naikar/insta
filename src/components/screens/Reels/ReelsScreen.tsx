import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
const ReelsScreen = () => {
  const { height, width } = useWindowDimensions();
  const REELS = [
    {
      id: '1',
      userName: '@travel_explorer',
      userAvatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      caption:
        'Waking up to this view in Bali 🏔️✨ #wanderlust #travelgram #bali',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
      musicName: 'Original Audio - travel_explorer',
      likes: '45.2K',
      comments: '842',
      reposts: '1.2K',
    },
    {
      id: '2',
      userName: '@chef_git',
      userAvatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
      caption:
        'The ultimate 15-minute creamy garlic pasta recipe 🍝🔥 Code to my stomach! #cooking #foodie #easyrecipes',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
      musicName: 'Lo-Fi Chill Beats - Aesthetic Sound',
      likes: '124K',
      comments: '3.1K',
      reposts: '42.5K',
    },
    {
      id: '3',
      userName: '@dev_lifestyle',
      userAvatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
      caption:
        'When you fix a production bug on Friday at 4:59 PM 😎🚀 #codinglife #reactnative #developer #programming',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
      musicName: 'Phonk Killer - Tokyo Drift Remaster',
      likes: '8.9K',
      comments: '143',
      reposts: '920',
    },
    {
      id: '4',
      userName: '@fit_focus',
      userAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      caption:
        'Consistency beats motivation every single time. Week 4 of the challenge! 💪🏼🏋🏼‍♀️ #fitnessmotivation #gymtok #grind',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600',
      musicName: 'Eye of the Tiger - Workout Remix',
      likes: '23.1K',
      comments: '452',
      reposts: '340',
    },
    {
      id: '5',
      userName: '@paws_and_claws',
      userAvatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      caption:
        'He thinks he’s invisible if he doesn’t move 😂🐶 #dogsofinstagram #funnycats #cuteanimals',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600',
      musicName: 'Funny Background Music - Comedy Loop',
      likes: '310K',
      comments: '12.4K',
      reposts: '89.1K',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={REELS}
        keyExtractor={(item) => item.id.toString()}

        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <View style={[styles.reelsMainContainer, { height: height }]}>
            {/* Reel content  */}
            <View style={styles.reelContainer}>
              <Image source={{ uri: item?.thumbnailUrl }} style={styles.thumbnail} />
            </View>

            {/* This is Bottom info section  */}
            <View style={styles.userInfo}>
              <View style={styles.userAvatarCont}>
                <Image source={{ uri: item?.userAvatar }} style={styles.userAvatar} />
                <Text style={styles.userName}>{item?.userName}</Text>
                <Text style={styles.followBtn}>Follow</Text>
              </View>
              <View>
                <Text numberOfLines={1} style={styles.text}>{item?.caption}</Text>
              </View>
              <View style={styles.musicContainer}>
                <Icon name="musical-notes" size={12} color="white" />
                <Text style={styles.text}>{item?.musicName}</Text>
              </View>
            </View>

            {/* Right CTA Sectino  */}
            <View style={styles.cta}>
              <View style={styles.cont}>
                <Feather name="heart" size={24} color="white" />
                <Text style={styles.text}>{item?.likes}</Text>
              </View>
              <View style={styles.cont}>
                <Icon name="chatbubble-outline" size={24} color="white" />
                <Text style={styles.text}>{item?.comments}</Text>
              </View>
              <View style={styles.cont}>
                <Feather name="repeat" size={24} color="white" />
                <Text style={styles.text}>{item?.reposts}</Text>
              </View>
              <View style={styles.cont}>
                <Feather name="send" size={24} color="white" />
                <Text style={styles.text}>{item?.likes}</Text>
              </View>
              <View style={styles.cont}>
                <Feather name="bookmark" size={24} color="white" />
                <Text style={styles.text}>{item?.comments}</Text>
              </View>
              <View style={styles.cont}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ReelsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  reelsMainContainer: {

  },
  thumbnail: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  reelContainer: {
    flex: 1
  },
  userInfo: {
    position: 'absolute',
    left: 16,
    bottom: 20,
    right: 70,
    gap: 10,
  },
  userAvatarCont: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  userAvatar: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'transparent',
    backgroundColor: 'white'
  },
  userName: {
    fontWeight: '600',
    color: 'white',
  },
  followBtn: {
    fontWeight: '700',
    color: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    paddingVertical: 3,
    paddingHorizontal: 8
  },
  musicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white'
  },
  cta: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    gap: 20
  },
  cont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})