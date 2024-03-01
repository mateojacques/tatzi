import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {TATTOO_ARTISTS, USER} from '../utils/mock';
import {
  DESIGN_BORDER_RADIUS,
  REGULAR_FONT,
  SEMIBOLD_FONT,
  TEXT_DARK,
  TEXT_MUTED,
} from '../utils/constants';
import AutoHeightImage from 'react-native-auto-height-image';

const ProfileScreen = () => {
  const user = USER;
  const tattoos = TATTOO_ARTISTS.map(({works}) => works).flat();
  const pinnedTattoos = tattoos
    .filter(({id}) => user.pinned.includes(id))
    .flat();

  return (
    <ScrollView style={styles.profileContainer}>
      <View style={styles.profileInfoContainer}>
        <Image src={user.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}> @{user.username}</Text>
        <Text style={styles.description}>{user.description}</Text>
      </View>
      <View style={styles.pinnedTattoosContainer}>
        {pinnedTattoos.map((tattoo: any) => (
          <View key={tattoo.id} style={styles.pinnedTattoo}>
            <AutoHeightImage
              source={{
                uri: tattoo.image,
              }}
              width={Dimensions.get('window').width / 2 - 15}
              style={styles.pinnedTattooImage}
              resizeMethod="resize"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 30,
  },
  profileInfoContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontFamily: SEMIBOLD_FONT,
    fontSize: 24,
    color: TEXT_DARK,
  },
  username: {
    fontFamily: REGULAR_FONT,
    fontSize: 18,
    color: TEXT_MUTED,
    marginBottom: 10,
  },
  description: {
    fontFamily: REGULAR_FONT,
    fontSize: 16,
    color: TEXT_DARK,
  },
  pinnedTattoosContainer: {
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  pinnedTattoo: {},
  pinnedTattooImage: {borderRadius: DESIGN_BORDER_RADIUS, flex: 1},
});
