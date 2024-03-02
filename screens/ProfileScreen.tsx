import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {TATTOO_ARTISTS, USER} from '../utils/mock';
import {
  DESIGN_BORDER_RADIUS,
  REGULAR_FONT,
  SEMIBOLD_FONT,
  TEXT_DARK,
  TEXT_MUTED,
} from '../utils/constants';
import {TabBar, TabView} from 'react-native-tab-view';
import AutoHeightImage from 'react-native-auto-height-image';
import TattooArtistCard from '../components/home/TattooArtistCard';

const Designs = ({pinned}: any) => (
  <ScrollView contentContainerStyle={styles.pinnedTattoosContainer}>
    {pinned.map((tattoo: any) => (
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
  </ScrollView>
);

const Artists = ({artists}: any) => (
  <ScrollView>
    {Array.isArray(artists) &&
      artists.map((artist: any) => (
        <TattooArtistCard key={artist.id} artist={artist} />
      ))}
  </ScrollView>
);

const ProfileScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tattoos', title: 'Tatuajes'},
    {key: 'designs', title: 'Diseños'},
    {key: 'artists', title: 'Artistas'},
  ]);

  const user = USER;
  const tattoos = TATTOO_ARTISTS.map(({works}) => works).flat();
  const designs = TATTOO_ARTISTS.map(({designs}) => designs).flat();
  const pinnedTattoos = tattoos
    .filter(({id}) => user.pinned.tattoos.includes(id))
    .flat();
  const pinnedDesigns = designs
    .filter(({id}) => user.pinned.designs.includes(id))
    .flat();
  const favArtists = TATTOO_ARTISTS.filter(({id}) =>
    user.pinned.artists.includes(id),
  );

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'tattoos':
        return <Designs pinned={pinnedTattoos} />;
      case 'designs':
        return <Designs pinned={pinnedDesigns} />;
      case 'artists':
        return <Artists artists={favArtists} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View style={styles.profileInfoContainer}>
          <Image src={user.profileImage} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}> @{user.username}</Text>
          <Text style={styles.description}>{user.description}</Text>
        </View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={styles.tabBar}
              activeColor={TEXT_DARK}
              inactiveColor={TEXT_MUTED}
              indicatorStyle={{backgroundColor: 'red'}}
              labelStyle={{fontFamily: SEMIBOLD_FONT}}
              pressColor={'#ffffff00'}
            />
          )}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 30,
    flex: 1,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
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
    marginTop: 15,
  },
  pinnedTattoo: {},
  pinnedTattooImage: {borderRadius: DESIGN_BORDER_RADIUS},
  tabBar: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
  },
});
