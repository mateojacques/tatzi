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
import {divideArrayInHalf, shuffleArray} from '../utils/helpers';
import {SEMIBOLD_FONT} from '../utils/constants';
import DesignsRow from '../components/designs/DesignsRow';

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
    const sortedDesigns = shuffleArray(fetchedDesigns);
    const [firstRow, secondRow] = divideArrayInHalf(sortedDesigns);
    setDesigns([firstRow, secondRow]);
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
          <View style={styles.rowContainer}>
            {designs.map((row, index) => (
              <DesignsRow index={index} row={row} />
            ))}
          </View>
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
  designsContainer: {
    padding: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});
