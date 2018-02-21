import React from 'react';
import { Container } from 'native-base';
import styles from './styles';

export default (props) => {
  return (
    <Container style={styles.container}>
      {props.children}
    </Container>
  );
};
