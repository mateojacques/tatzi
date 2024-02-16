import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TATTOO_ARTISTS} from '../utils/mock';
import TattooArtistCard from '../components/home/TattooArtistCard';
import {SEMIBOLD_FONT} from '../utils/constants';
import HomeTattooStylesSelection from '../components/home/HomeTattooStylesSelection';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tattooStyleContainer}>
        <Text style={styles.sectionTitle}>Elegí tu estilo</Text>
        <ScrollView horizontal contentContainerStyle={styles.bannerContainer}>
          <HomeTattooStylesSelection />
        </ScrollView>
      </View>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        overScrollMode="never">
        <View style={styles.homeTitleContainer}>
          <Text style={styles.homeTitle}>
            Descubrí nuevo talento cerca tuyo
          </Text>
          <Image
            source={require('../assets/images/home_banner_image.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        {TATTOO_ARTISTS.map((artist, index) => (
          <TattooArtistCard artist={artist} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    gap: 10,
  },
  homeTitleContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    paddingVertical: 15,
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  homeTitle: {
    fontFamily: SEMIBOLD_FONT,
    fontSize: 28,
    maxWidth: 250,
    color: '#fff',
  },
  tattooStyleContainer: {
    padding: 15,
    maxWidth: '100%',
    overflow: 'scroll',
  },
  sectionTitle: {
    fontFamily: SEMIBOLD_FONT,
    fontSize: 20,
    color: '#111',
    marginBottom: 15,
  },
  bannerContainer: {
    gap: 10,
  },
});
