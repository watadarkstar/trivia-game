import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default () => {
  return (
    <Image
      source={{ uri: 'http://whatsupyukon.com/downloads/7201/download/trivia-night.png' }} 
      style={styles.logo}
    />
  );
};
