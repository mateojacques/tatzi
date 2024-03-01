import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TATTOO_ARTISTS} from '../utils/mock';
import {shuffleArray} from '../utils/helpers';
import {DESIGN_BORDER_RADIUS, SEMIBOLD_FONT} from '../utils/constants';
import AutoHeightImage from 'react-native-auto-height-image';

const DesignsScreen = () => {
  const [designs, setDesigns] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('tattoos');

  const getDesigns = () => {
    const fetchedDesigns = TATTOO_ARTISTS.reduce(
      (designsAccummulator: any, {works, designs: artistDesigns}) => {
        return [
          ...designsAccummulator,
          ...(selectedTab === 'tattoos' ? works : artistDesigns),
        ];
      },
      [],
    );
    const shuffledDesigns = shuffleArray(fetchedDesigns);
    setDesigns(shuffledDesigns);
  };

  const TABS = [
    {id: 'tattoos', label: 'Tatuajes'},
    {id: 'designs', label: 'Diseños'},
  ];

  useEffect(() => {
    getDesigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return (
    <View>
      <View style={styles.buttonContainer}>
        {TABS.map(({id: tabName, label}, index) => (
          <Pressable onPress={() => setSelectedTab(tabName)}>
            <View
              style={{
                ...styles.button,
                ...styles[index === 0 ? 'buttonLeft' : 'buttonRight'],
                backgroundColor: tabName === selectedTab ? '#111' : '#d3d3d3',
              }}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: tabName === selectedTab ? '#fff' : '#666',
                }}>
                {label}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      <View style={{flexShrink: 1}}>
        <ScrollView contentContainerStyle={styles.designsContainer}>
          {designs.map((design: any) => (
            <View style={styles.designContainer}>
              <AutoHeightImage
                key={design.id}
                source={{
                  uri: design.image,
                }}
                width={Dimensions.get('window').width / 2 - 30}
                style={styles.design}
                resizeMethod="resize"
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DesignsScreen;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 2 - 15,
    backgroundColor: '#111',
    paddingVertical: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 30,
    marginBottom: 15,
  },
  buttonLeft: {
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  buttonRight: {
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  buttonText: {
    fontFamily: SEMIBOLD_FONT,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  design: {
    borderRadius: DESIGN_BORDER_RADIUS,
    flex: 1,
  },
  designContainer: {},
  designsContainer: {
    padding: 15,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
