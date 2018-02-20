import React from 'react';
import {
  Screen,
  Heading,
  Title,
  Subtitle,
  Text,
  Button,
  Spinner 
} from '@shoutem/ui';
import { connect } from 'react-redux';
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
        <Heading>Welcome to the Trivia Challenge!</Heading>
        <Title>You will be presented with 10 True or False questions.</Title>
        <Subtitle>Can you score 100%?</Subtitle>
        { this.props.loading === true ?
          <Spinner styleName="large" />
        :
          <Button styleName="secondary" onPress={this.onPressBegin}><Text>BEGIN</Text></Button>
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
