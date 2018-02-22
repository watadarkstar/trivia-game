import React from 'react';
import {
  H1,
  Text,
  Card,
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import styles, { htmlStyles } from './styles';

export default ({ questions, currentQuestion }) => {
  const { category, question, index } = currentQuestion;
  
  return (
    <Card style={styles.card}>
      <H1 style={styles.h1}>{category}</H1>
      <HTMLView value={`<h2>${question}</h2>`} stylesheet={htmlStyles} />
      <Text style={styles.text}>{index + 1} of {questions.length}</Text>
    </Card>
  );
};
