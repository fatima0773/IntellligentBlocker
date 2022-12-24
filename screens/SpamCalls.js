/* eslint-disable prettier/prettier */
import {View, Text,  SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

export default function BlockedCalls({ navigation }) {

  return (
      <SafeAreaView style = {styles.container}>
          <View >
              <Text style = {styles.Textformat}>Spam Calls</Text>
          </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    Textformat: {
        color: '#ffffff',
        paddingLeft : 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});
