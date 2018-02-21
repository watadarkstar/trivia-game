import React from 'react';
import { ScrollView } from 'react-native';
import {
  H1,
  H2,
  H3,
  Text,
  Button,
  Icon,
  View
} from 'native-base';
import { connect } from 'react-redux';
import { Screen } from '../../common';
import { getNumCorrect } from '../../../store/quiz/selectors';

class Results extends React.PureComponent {
  onPressPlayAgain = () => {
    this.props.navigation.navigate('Home');
  }
  
  render() {
    return (
      <Screen>
        <ScrollView>
          <H1>You scored</H1>
          <H2>{this.props.correct}/{this.props.questions.length}.</H2>
          {this.props.questions.map(question => {
            return (
              <View key={question.question}>
                {question.correct === true ?
                  <Icon name="ios-checkmark-circle-outline" />
                  :
                  <Icon name="ios-close-circle-outline" />
                }
                <H3>{question.question}</H3>
              </View>
            );
          })}
          <Button styleName="secondary" onPress={this.onPressPlayAgain}>
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
