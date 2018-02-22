import React from 'react';
import {
  List,
} from 'native-base';
import ResultsListItem from '../ResultsListItem';

export default ({ questions }) => {
  return (
    <List>
      {questions.map(question => {
        return <ResultsListItem question={question} key={question.question} />;
      })}
    </List>
  );
};
