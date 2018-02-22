import React from 'react';
import { ScrollView } from 'react-native';
import {
  H1,
  H2,
  Text,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
import { Screen } from '../../common';
import { getNumCorrect } from '../../../store/quiz/selectors';
import ResultsList from './ResultsList';
import styles from './styles';

class Results extends React.PureComponent {
  onPressPlayAgain = () => {
    this.props.navigation.navigate('Home');
  }
  
  render() {
    return (
      <Screen>
        <ScrollView>
          <H1 style={styles.h1}>You scored</H1>
          <H2 style={styles.h2}>{this.props.correct}/{this.props.questions.length}.</H2>
          <ResultsList questions={this.props.questions} />
          <Button block onPress={this.onPressPlayAgain}>
            <Text>PLAY AGAIN?</Text>
          </Button>
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions } = state.quiz;
  const correct = getNumCorrect(state);
  return { questions, correct };
};

export default connect(mapStateToProps, null)(Results);
