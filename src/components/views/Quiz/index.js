import React from 'react';
import { connect } from 'react-redux';
import {
  Screen,
  Heading,
  Title,
  Text,
  Button
} from '@shoutem/ui';
import { quizCorrect } from '../../../store/quiz/actions';

class Quiz extends React.PureComponent {
  state = { current: 0 };
  
  onPressAnswer = (myAnswer) => {
    const { current } = this.state;
    const { questions } = this.props;
    const currentQuestion = questions[current];
    
    if (currentQuestion.correct_answer === myAnswer) {
      this.props.quizCorrect(current);
    }
    
    if ((current + 1) < questions.length) {
      this.setState({ current: current + 1 });
    } else {
      this.props.navigation.navigate('Results');
    }
  }
  
  render() {
    const { current } = this.state;
    const { questions } = this.props;
    const currentQuestion = questions[current];
    const { category, question } = currentQuestion;
    
    return (
      <Screen>
        <Heading>{category}</Heading>
        <Title>{question}</Title>
        <Text>{current + 1} of {questions.length}</Text>
        <Button styleName="secondary" onPress={() => this.onPressAnswer('True')}>
          <Text>TRUE</Text>
        </Button>
        <Button styleName="secondary" onPress={() => this.onPressAnswer('False')}>
          <Text>FALSE</Text>
        </Button>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions, current } = state.quiz;
  return { questions, current };
};

export default connect(mapStateToProps, { quizCorrect })(Quiz);
