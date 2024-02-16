import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {USER_LOCATION} from '../../utils/mock';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Pressable onPress={() => console.log('Change address')}>
        <View style={styles.location}>
          <Icon name="map-marker" size={20} color="#6A6A6A" />
          <Text style={styles.locationText}>{USER_LOCATION}</Text>
        </View>
      </Pressable>
      <View>
        <Icon name="email-outline" size={30} color="#111" />
        <View style={styles.messageBadge}>
          <Text style={styles.messageBadgeText}>2</Text>
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#ececec',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#6A6A6A',
  },
  messageBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FE251B',
    position: 'absolute',
    top: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});
