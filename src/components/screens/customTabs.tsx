import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontiso from 'react-native-vector-icons/Fontisto';
const customTabs = () => {
  const [active, setActive] = useState<String>('posts');

  const TABS = [
    {
      id: 1,
      label: 'posts',
      icon: <Fontiso name="nav-icon-grid" size={18} color={'black'} />,
    },

    {
      id: 2,
      label: 'reels',
      icon: <Icon name="play-outline" size={24} color={'black'} />,
    },
    {
      id: 3,
      label: 'reposts',
      icon: <Feather name="repeat" size={20} color={'black'} />,
    },
    {
      id: 4,
      label: 'tags',
      icon: <Icon name="person-outline" size={22} color={'black'} />,
    },
  ];
  const DUMMY_REELS = [
    { id: '1', views: '1.2M' },
    { id: '2', views: '850K' },
    { id: '3', views: '2.1M' },
    { id: '4', views: '500K' },
  ];
  const renderTabs = () => {
    switch (active) {
      case 'posts':
        return (
          <View style={styles.gridContainer}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <View key={i} style={styles.gridItem}>
                <View style={styles.gridImagePlaceholder} />
              </View>
            ))}
          </View>
        );
      case 'reels':
        return (
          <View style={styles.reelsContainer}>
            {[1, 2, 3, 4].map(i => (
              <View key={i} style={styles.reelItem}>
                <View style={styles.reelPlaceholder} />
                <Icon
                  name="play-circle-outline"
                  size={36}
                  color="white"
                  style={styles.playIcon}
                />
                <Text style={styles.reelViews}>1.{i}M views</Text>
              </View>
            ))}
          </View>
        );
      case 'reposts':
        return (
          <View style={{ padding: 12 }}>
            {[1, 2, 3].map(i => (
              <View key={i} style={styles.repostCard}>
                <View style={styles.repostAvatar} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>user_{i}</Text>
                  <Text style={{ color: 'gray', fontSize: 12 }}>
                    Reposted from @original_user
                  </Text>
                </View>
              </View>
            ))}
          </View>
        );
      case 'tags':
        return (
          <View style={styles.gridContainer}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <View key={i} style={styles.gridItem}>
                <View style={styles.gridImagePlaceholder} />
                <Icon
                  name="person"
                  size={16}
                  color="white"
                  style={styles.tagIcon}
                />
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.tabContainer}>
        {TABS.map(item => {
          const isActive = active === item.label;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setActive(item.label)}
              style={[isActive ? styles.activeTab : styles.tab]}
            >
              <View>{item.icon}</View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>{renderTabs()}</View>
    </>
  );
};

export default customTabs;

const styles = StyleSheet.create({
  tab: {
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  content: {
    height: 200,
    width: '100%',
    backgroundColor: 'red',
    marginVertical: 2,
  },
  content2: {
    height: 200,
    width: '100%',
    backgroundColor: 'orange',
    marginVertical: 2,
  },
  content3: {
    height: 200,
    marginVertical: 2,
    width: '100%',
    backgroundColor: 'pink',
  },
  content4: {
    marginVertical: 2,
    height: 200,
    width: '100%',
    backgroundColor: 'yellow',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  gridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 2,
    position: 'relative',
  },
  gridImagePlaceholder: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    borderRadius: 2,
  },
  reelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  reelItem: {
    width: '50%',
    aspectRatio: 0.6,
    padding: 2,
    position: 'relative',
  },
  reelPlaceholder: {
    flex: 1,
    backgroundColor: '#b0b0b0',
    borderRadius: 4,
  },
  playIcon: {
    position: 'absolute',
    bottom: 30,
    left: '38%',
  },
  reelViews: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  repostCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  repostAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#c0c0c0',
  },
  tagIcon: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
});
