import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { CONSTANT_IMAGES } from '../../common/constantImages';
import { POSTS } from '../../../utils/InstaPostJson';
import Icon from 'react-native-vector-icons/Ionicons';
import { CONSTANT_COLOR } from '../../common/constantColors';
import { highLights } from '../../common/utils';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomMidScreenTabs from '../customTabs';

const ProfileScreen = () => {
  const data = POSTS?.result?.edges?.[0]?.node;
  console.log('This is profile pic: ', data?.owner?.profile_pic_url);
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.header}>
        <View style={styles.icons}>
          <Icon name="lock-closed" size={20} color="#000" />
          <Text style={{ fontSize: 15, fontWeight: '600' }}>
            {data?.user?.username}
          </Text>{' '}
          {data?.user?.is_verified && (
            <Image
              source={CONSTANT_IMAGES?.verificationBadge}
              style={styles.verifyBadge}
            />
          )}
          <Icon name="chevron-down" size={20} color="#000" />
        </View>
        <View style={styles.menuIcon}>
          <Icon name="menu" size={24} color="#000" />
        </View>
      </View>

      {/* Profile details  */}
      <View style={styles.profileInfo}>
        <View style={styles.profilePic}>
          {/* <Image source={CONSTANT_IMAGES?.profilePic} style={styles.profilePic}/> */}

          {/* <Image
              source={{ uri: data?.owner?.profile_pic_url }}
              style={styles.profilePic}
            /> */}

          {/* Replace the Icon with API  */}
          <View style={styles.profilePic}>
            <Icon name="person-circle-outline" size={100} color="black" />
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.statsNums}>
            <Text style={styles.nums}>13</Text>
            <Text style={styles.statsText}>Posts</Text>
          </View>
          <View style={styles.statsNums}>
            <Text style={styles.nums}>861</Text>
            <Text style={styles.statsText}>Followers</Text>
          </View>
          <View style={styles.statsNums}>
            <Text style={styles.nums}>132</Text>
            <Text style={styles.statsText}>Following</Text>
          </View>
        </View>
      </View>

      {/* bio  */}
      <View style={styles.bioSection}>
        <Text style={{ fontWeight: '600' }}>{data?.user?.username}</Text>
      </View>

      {/* edit profile  */}
      <View style={styles.editProfile}>
        <Text style={{ fontWeight: '500' }}>Edit Profile</Text>
      </View>

      {/* highlights section  */}
      <FlatList
        data={highLights}
        keyExtractor={item => item?.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listPadding}>
            {item?.id === 1 ? (
              <View style={styles.highlightText}>
                <View style={[styles.highlight, styles.add]}>
                  <Icon name="add" size={30} color="#000" />
                </View>
                <Text>New</Text>
              </View>
            ) : (
              <View style={styles.highlightText}>
                <Image source={{ uri: item?.img }} style={styles.highlight} />
                <Text>
                  {item?.name.length > 9
                    ? item?.name.slice(0, 9) + '...'
                    : item?.name}
                </Text>
              </View>
            )}
          </View>
        )}
      />

      {/* posts  */}
      <CustomMidScreenTabs />
      {/* <TopTabNavigator/> */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexDirection: 'row',
  },
  menuIcon: {
    position: 'absolute',
    right: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  profilePic: {
    height: 96,
    width: 96,
    borderRadius: 47,
  },
  stats: {
    flexDirection: 'row',
    gap: 30,
    position: 'absolute',
    right: 10,
    marginRight: 20,
  },
  verifyBadge: {
    height: 18,
    width: 18,
  },
  statsText: {
    fontWeight: '500',
  },
  nums: {
    fontWeight: '600',
    fontSize: 17,
    color: '#474747ff',
  },
  statsNums: {
    alignItems: 'center',
  },
  bioSection: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  editProfile: {
    backgroundColor: '#fafafa',
    borderWidth: 0.5,
    borderColor: CONSTANT_COLOR?.grey,
    borderRadius: 5,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  listPadding: {
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  highlight: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#e1e1e1',
    backgroundColor: '#ddd',
  },
  storyTitle: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
    textAlign: 'center',
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CONSTANT_COLOR?.grey,
    borderWidth: 1,
  },
  highlightText: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  postsSection: {
    borderTopWidth: 1,
    borderTopColor: CONSTANT_COLOR?.liteGrey,
  },
});
