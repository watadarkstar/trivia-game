import React from 'react';
import {
  Text,
  Button,
  Spinner,
  View
} from 'native-base';
import styles from './styles';

const onPressBegin = (props) => {
    props.quizBegin();
    props.navigation.navigate('Quiz');
};

export default (props) => {
  return (
    <View style={styles.loadingContainer}>
      { props.loading === true ?
        <Spinner />
      :
        <Button block onPress={() => onPressBegin(props)} >
          <Text>BEGIN</Text>
        </Button>
      }
    </View>
  );
};
