import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {REGULAR_FONT} from '../../utils/constants';

const TattooArtistCard = ({
  artist: {works, name, profileImage, tattooStyles, location, calification},
}: any) => {
  const [saved, setSaved] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const handleSelectStyle = (style: string) => {
    if (tattooStyles.length === 1) {
      return;
    }
    let updatedStyles = [];
    if (selectedStyles.includes(style)) {
      updatedStyles = selectedStyles.filter(
        (filteredStyle: string) => filteredStyle !== style,
      );
    } else {
      updatedStyles = [...selectedStyles, style];
    }

    setSelectedStyles(updatedStyles);
  };

  const selectAllStyles = () =>
    tattooStyles.forEach(({name: style}: any) => {
      setSelectedStyles((prevStyles: string[]) => [...prevStyles, style]);
    });

  useEffect(() => {
    if (selectedStyles.length === 0) {
      selectAllStyles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable onPress={() => console.log(`Pressed tattoo artist: ${name}`)}>
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
              color={saved ? '#EF5350' : '#111'}
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
        <View style={styles.artistWorkContainer}>
          {works.map(({id, image}: any) => (
            <Image
              key={id}
              style={styles.artistWork}
              source={{
                uri: image,
              }}
            />
          ))}
        </View>
        <View style={styles.tattooArtistCardBottom}>
          <View style={styles.artistStyleContainer}>
            {tattooStyles.map(({id, name: tattooStyleName}: any) => (
              <Pressable onPress={() => handleSelectStyle(tattooStyleName)}>
                <View
                  key={id}
                  style={{
                    ...styles.artistStyle,
                    backgroundColor: selectedStyles.includes(tattooStyleName)
                      ? '#181818'
                      : '#d3d3d3',
                  }}>
                  <Text
                    style={{
                      ...styles.artistStyleText,
                      color: selectedStyles.includes(tattooStyleName)
                        ? '#fff'
                        : '#666',
                    }}>
                    {tattooStyleName}
                  </Text>
                  {selectedStyles.includes(tattooStyleName) && (
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
    </Pressable>
  );
};

export default TattooArtistCard;

const styles = StyleSheet.create({
  tattooArtistCard: {
    paddingVertical: 20,
    borderColor: '#d3d3d3',
    borderBottomWidth: 0,
  },
  artistWorkContainer: {
    flexDirection: 'row',
  },
  artistWork: {
    width: '33%',
    height: 229,
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
  tattooArtistCardBottom: {
    marginTop: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  artistProfileImage: {
    width: 32,
    height: 32,
  },
  artistNameAndUsernameContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: REGULAR_FONT,
    color: '#111',
  },
  artistUsername: {
    fontSize: 14,
    color: '#111',
    fontWeight: 'bold',
  },
  artistStyleContainer: {
    gap: 11,
    flexDirection: 'row',
  },
  artistStyleText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  artistBasicInfo: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  artistFavIconContainer: {
    marginLeft: 'auto',
    gap: 3,
  },
  tattooArtistCardActions: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  artistStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
  },
  artistLocation: {
    fontSize: 10,
    color: '#111',
  },
  tattooArtistReviewContainer: {
    flexDirection: 'row',
    gap: 3,
  },
});
