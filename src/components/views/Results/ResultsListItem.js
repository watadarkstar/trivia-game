import React from 'react';
import {
  ListItem,
  Icon,
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import styles, { htmlStyles } from './styles';

export default ({ question }) => {
  return (
    <ListItem>
      {question.correct === true ?
        <Icon name="ios-checkmark-circle-outline" style={styles.correct} />
        :
        <Icon name="ios-close-circle-outline" style={styles.wrong} />
      }
      <HTMLView 
        value={`<h3>${question.question}</h3>`}
        stylesheet={htmlStyles}
        style={styles.question}
      />
    </ListItem>
  );
};
