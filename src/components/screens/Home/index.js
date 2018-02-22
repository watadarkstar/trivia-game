import React from 'react';
import { ScrollView } from 'react-native';
import { H2, H3, Text, View } from 'native-base';
import { Screen } from '../../common';
import styles from './styles';
import HomeLogo from './HomeLogo';
import HomeLoading from './HomeLoading';

export default (props) => {
  return (
      <Screen style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <HomeLogo />
            <View>
              <H2 style={styles.h2}>Welcome to the Trivia Challenge!</H2>
              <H3 style={styles.h3}>You will be presented with 10 True or False questions.</H3>
              <Text style={styles.text}>Can you score 100%?</Text>
              <HomeLoading navigation={props.navigation} />
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
};
