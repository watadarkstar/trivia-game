import React from 'react';
import { ScrollView } from 'react-native';
import {
  Heading,
  Title,
  Subtitle,
  Text,
  Button,
  Icon,
  View
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { getNumCorrect } from '../../../store/quiz/selectors';

class Results extends React.PureComponent {
  onPressPlayAgain = () => {
    this.props.navigation.navigate('Home');
  }
  
  render() {
    return (
      <ScrollView>
        <Heading>You scored</Heading>
        <Title>{this.props.correct}/{this.props.questions.length}.</Title>
        {this.props.questions.map(question => {
          return (
            <View key={question.question}>
              {question.correct === true ?
                <Icon name="checkbox-on" />
                :
                <Icon name="clear-text" />
              }
              <Subtitle>{question.question}</Subtitle>
            </View>
          );
        })}
        <Button styleName="secondary" onPress={this.onPressPlayAgain}>
          <Text>PLAY AGAIN?</Text>
        </Button>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions } = state.quiz;
  const correct = getNumCorrect(state);
  return { questions, correct };
};

export default connect(mapStateToProps, null)(Results);
