import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SEMIBOLD_FONT} from '../../utils/constants';

const HomeTattooStylesSelection = () => {
  return (
    // TODO improve this rendering method when working out how dynamic images import works on RN
    <>
      <Pressable>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/realism_banner.png')}
            style={styles.banner}
          />
          <Text style={styles.bannerName}>Realismo</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/blackwork_banner.png')}
            style={styles.banner}
          />
          <Text style={styles.bannerName}>Blackwork</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/traditional_banner.png')}
            style={styles.banner}
          />
          <Text style={styles.bannerName}>Tradicional</Text>
        </View>
      </Pressable>
    </>
  );
};

export default HomeTattooStylesSelection;

export const styles = StyleSheet.create({
  bannerContainer: {
    width: 144,
    height: 55,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
  },
  banner: {
    width: 144,
    height: 55,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bannerName: {
    fontFamily: SEMIBOLD_FONT,
    fontSize: 14,
    color: '#fff',
  },
});
