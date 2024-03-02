import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ACCENT, REGULAR_FONT, TEXT_DARK} from '../../utils/constants';
import {Image} from '@rneui/themed';
import {Dimensions} from 'react-native';

const TattooArtistCard = ({
  artist: {works, name, profileImage, tattooStyles, location, calification},
}: any) => {
  const [artistWorks, setArtistWorks] = useState<any[]>(works);
  const [saved, setSaved] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>(
    tattooStyles[0].name,
  );
  const slicedArtistWorks = artistWorks.slice(0, 3);

  const filterTattooListBySelectedStyle = () => {
    const filteredTattooList = works.filter(
      ({style: {name: styleName}}: any) => styleName === selectedStyle,
    );

    setArtistWorks(filteredTattooList);
  };

  const handleSelectStyle = (style: string) => setSelectedStyle(style);

  useEffect(() => {
    filterTattooListBySelectedStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStyle]);

  return (
    <View style={styles.tattooArtistCard}>
      <View style={styles.tattooArtistCardTop}>
        <View style={styles.artistBasicInfo}>
          <Image
            style={styles.artistProfileImage}
            source={{
              uri: profileImage,
            }}
          />
          <View>
            <Text style={styles.artistUsername}>{name}</Text>
            <Text style={styles.artistLocation}>{location.city}</Text>
          </View>
        </View>
        <View style={styles.tattooArtistCardActions}>
          <Icon
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={saved ? ACCENT : TEXT_DARK}
            onPress={() => setSaved(!saved)}
          />
          <Icon
            name={followed ? 'account-check' : 'account-plus-outline'}
            size={20}
            color={'#111'}
            onPress={() => setFollowed(!followed)}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.artistWorkContainer}>
        {slicedArtistWorks.map(({id, image}: any) => (
          <Image
            key={id}
            style={styles.artistWork}
            source={{
              uri: image,
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.tattooArtistCardBottom}>
        <View style={styles.artistStyleContainer}>
          {tattooStyles.map(({id, name: tattooStyleName}: any) => (
            <Pressable onPress={() => handleSelectStyle(tattooStyleName)}>
              <View
                key={id}
                style={{
                  ...styles.artistStyle,
                  backgroundColor:
                    selectedStyle === tattooStyleName ? '#181818' : '#d3d3d3',
                }}>
                <Text
                  style={{
                    ...styles.artistStyleText,
                    color: selectedStyle === tattooStyleName ? '#fff' : '#666',
                  }}>
                  {tattooStyleName}
                </Text>
                {selectedStyle === tattooStyleName && (
                  <Icon
                    name={'check'}
                    size={10}
                    color={'#fff'}
                    onPress={() => setFollowed(!followed)}
                  />
                )}
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.tattooArtistReviewContainer}>
          <Icon
            name={'star'}
            size={20}
            color={'#FDCC0D'}
            onPress={() => setFollowed(!followed)}
          />
          <Text style={{color: '#111'}}>
            <Text style={{fontWeight: 'bold'}}>{calification.average}</Text> (
            {calification.reviewsQuantity})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TattooArtistCard;

const styles = StyleSheet.create({
  artistBasicInfo: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  artistFavIconContainer: {
    marginLeft: 'auto',
    gap: 3,
  },
  artistLocation: {
    fontSize: 10,
    color: '#111',
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: REGULAR_FONT,
    color: '#111',
  },
  artistNameAndUsernameContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  artistProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 5,
  },
  artistStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
  },
  artistStyleContainer: {
    gap: 11,
    flexDirection: 'row',
  },
  artistStyleText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  artistUsername: {
    fontSize: 14,
    color: '#111',
    fontWeight: 'bold',
  },
  artistWork: {
    width: Dimensions.get('window').width / 2 - 5,
    height: Dimensions.get('window').width / 2 - 5,
  },
  artistWorkContainer: {
    gap: 10,
  },
  tattooArtistCard: {
    paddingVertical: 20,
    borderColor: '#d3d3d3',
    borderBottomWidth: 0,
  },
  tattooArtistCardActions: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  tattooArtistCardBottom: {
    marginTop: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  tattooArtistCardTop: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'space-between',
    marginBottom: 11,
    paddingHorizontal: 15,
  },
  tattooArtistReviewContainer: {
    flexDirection: 'row',
    gap: 3,
  },
});
