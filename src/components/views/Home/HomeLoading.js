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
      { props.loading === true && 
        <Spinner />
      }
      { props.loading === false && props.error === null &&
        <Button block onPress={() => onPressBegin(props)} >
          <Text>BEGIN</Text>
        </Button>
      }
      { props.loading === false && props.error !== null &&
        <Text style={styles.error}>Sorry the server is offline.</Text>
      }
    </View>
  );
};
