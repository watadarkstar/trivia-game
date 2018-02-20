import React from 'react';
import {
  Screen,
  Heading,
  Title,
  Subtitle,
  Text,
  Button 
} from '@shoutem/ui';

class Home extends React.PureComponent {
  onPressBegin = () => {
      this.props.navigation.navigate('Quiz');
  }
  
  render() {
    return (
      <Screen>
        <Heading>Welcome to the Trivia Challenge!</Heading>
        <Title>You will be presented with 10 True or False questions.</Title>
        <Subtitle>Can you score 100%?</Subtitle>
        <Button styleName="secondary" onPress={this.onPressBegin}><Text>BEGIN</Text></Button>
      </Screen>
    );
  }
}

export default Home;
