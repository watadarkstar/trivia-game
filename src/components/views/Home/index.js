import React from 'react';
import {
  H1,
  H2,
  H3,
  Text,
  Button,
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';
import { Screen } from '../../common';
import { quizFetch, quizBegin } from '../../../store/quiz/actions';

class Home extends React.PureComponent {
  componentWillMount() {
    this.props.quizFetch();
  }
  
  onPressBegin = () => {
      this.props.quizBegin();
      this.props.navigation.navigate('Quiz');
  }
  
  render() {
    return (
      <Screen>
        <H1>Welcome to the Trivia Challenge!</H1>
        <H2>You will be presented with 10 True or False questions.</H2>
        <H3>Can you score 100%?</H3>
        { this.props.loading === true ?
          <Spinner />
        :
          <Button onPress={this.onPressBegin}><Text>BEGIN</Text></Button>
        }
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading } = state.quiz;
  return { loading };
};

export default connect(mapStateToProps, { quizFetch, quizBegin })(Home);
