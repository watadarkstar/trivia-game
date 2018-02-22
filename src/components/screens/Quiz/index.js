/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  Text,
  Button,
  View,
  DeckSwiper,
  Icon
} from 'native-base';
import { Screen } from '../../common';
import { quizCorrect } from '../../../store/quiz/actions';
import styles from './styles';
import QuizCard from './QuizCard';

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
    return <QuizCard currentQuestion={currentQuestion} questions={this.props.questions} />;
  }
  
  renderEmpty = () => {
    return <Text style={styles.emptyText}>No more questions.</Text>;
  }
  
  render() {
    return (
      <Screen style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <DeckSwiper
              ref={(c) => { this._deckSwiper = c; }}
              dataSource={this.props.questions}
              renderItem={this.renderCard}
              onSwipeRight={() => this.answered('False')}
              onSwipeLeft={() => this.answered('True')}
              looping={false}
              renderEmpty={this.renderEmpty}
            />
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
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions } = state.quiz;
  return { questions };
};

export default connect(mapStateToProps, { quizCorrect })(Quiz);
