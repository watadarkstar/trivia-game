import React from 'react';
import { ScrollView } from 'react-native';
import { H2, H3, Text, Content } from 'native-base';
import { connect } from 'react-redux';
import { Screen } from '../../common';
import { quizFetch, quizBegin } from '../../../store/quiz/actions';
import styles from './styles';
import HomeLogo from './HomeLogo';
import HomeLoading from './HomeLoading';

class Home extends React.PureComponent {
  componentWillMount() {
    this.props.quizFetch();
  }
  
  render() {
    return (
      <Screen>
        <ScrollView>
          <HomeLogo />
          <Content>
            <H2 style={styles.h2}>Welcome to the Trivia Challenge!</H2>
            <H3 style={styles.h3}>You will be presented with 10 True or False questions.</H3>
            <Text style={styles.text}>Can you score 100%?</Text>
            <HomeLoading {...this.props} />
          </Content>
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error } = state.quiz;
  return { loading, error };
};

export default connect(mapStateToProps, { quizFetch, quizBegin })(Home);
