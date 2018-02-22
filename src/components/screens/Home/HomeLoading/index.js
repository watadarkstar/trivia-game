import React from 'react';
import {
  Text,
  Button,
  Spinner,
  View
} from 'native-base';
import { connect } from 'react-redux';
import { quizFetch, quizBegin } from '../../../../store/quiz/actions';
import styles from './styles';

class HomeLoading extends React.PureComponent {
  componentWillMount() {
    this.props.quizFetch();
  }
  
  onPressBegin = () => {
      this.props.quizBegin();
      this.props.navigation.navigate('Quiz');
  };
  
  render() {
    return (
      <View style={styles.loadingContainer}>
        { this.props.loading === true && 
          <Spinner />
        }
        { this.props.loading === false && this.props.error === null &&
          <Button block onPress={() => this.onPressBegin(this.props)} >
            <Text>BEGIN</Text>
          </Button>
        }
        { this.props.loading === false && this.props.error !== null &&
          <Text style={styles.error}>Sorry the server is offline.</Text>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error } = state.quiz;
  return { loading, error };
};

export default connect(mapStateToProps, { quizFetch, quizBegin })(HomeLoading);
