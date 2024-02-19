import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const DesignsRow = ({row}: any) => (
  <View style={styles.rowContainer}>
    {row.map(({id, image}: any) => (
      <View style={styles.designContainer}>
        <AutoHeightImage
          key={id}
          source={{
            uri: image,
          }}
          width={Dimensions.get('window').width / 2 - 30}
          style={styles.design}
          resizeMethod="resize"
        />
      </View>
    ))}
  </View>
);

export default DesignsRow;

const styles = StyleSheet.create({
  design: {
    borderRadius: 10,
  },
  rowContainer: {
    gap: 15,
  },
  designContainer: {
    position: 'relative',
  },
});
