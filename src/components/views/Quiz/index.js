/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import {
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
  View,
  DeckSwiper,
  Icon
} from 'native-base';
import { Screen } from '../../common';
import { quizCorrect } from '../../../store/quiz/actions';
import styles from './styles';

class Quiz extends React.PureComponent {
  /*
    current card (not part of state to avoid unnecessary re-rendering)
  */
  current = 0
  
  answered = (answer) => {
    const { current } = this;
    const { questions } = this.props;
    const currentQuestion = questions[current];
    
    if (currentQuestion.correct_answer === answer) {
      this.props.quizCorrect(current);
    }
    
    if ((current + 1) < questions.length) {
      this.current++;
    } else {
      this.props.navigation.navigate('Results');
    }
  }
  
  swipeRight = () => {
    this._deckSwiper._root.swipeRight();
    this.answered('True');
  }
  
  swipeLeft = () => {
    this._deckSwiper._root.swipeLeft();
    this.answered('Left');
  }
  
  renderCard = (currentQuestion) => {
    const { questions } = this.props;
    const { category, question, index } = currentQuestion;
    
    return (<Card>
      <View>
        <H1>{category}</H1>
        <H2>{question}</H2>
        <H3>{index + 1} of {questions.length}</H3>
      </View>
    </Card>);
  }
  
  render() {
    return (
      <Screen>
        <View>
          <DeckSwiper
            ref={(c) => { this._deckSwiper = c; }}
            dataSource={this.props.questions}
            renderItem={this.renderCard}
            onSwipeRight={() => this.answered('False')}
            onSwipeLeft={() => this.answered('True')}
            looping={false}
          />
        </View>
        <View style={styles.footer}>
          <Button bordered danger iconLeft onPress={this.swipeLeft}>
            <Icon name="arrow-back" />
            <Text>FALSE</Text>
          </Button>
          <Button bordered success iconRight onPress={this.swipeRight}>
            <Text>TRUE</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions } = state.quiz;
  return { questions };
};

export default connect(mapStateToProps, { quizCorrect })(Quiz);
