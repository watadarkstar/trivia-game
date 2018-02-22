import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

export default () => {
  return (
    <View>
      <Image
        source={{ uri: 'http://whatsupyukon.com/downloads/7201/download/trivia-night.png' }} 
        style={styles.logo}
      />
    </View>
  );
};
