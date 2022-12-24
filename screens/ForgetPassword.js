/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton/CustomButton';


const ForgetPassword = function ({navigation}) {
  const [Email, setEmail] = useState('');
  const onBacktoLoginPressed = function () {
    navigation.replace('/');
  };

  const onSendCodePressed = function () {
    navigation.replace('EmailConfirm');
  };


  return (
    <SafeAreaView style={styles.root1}>
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Password</Text>
        <View style={styles.container}>
       <TextInput
          value={Email}
          onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={false}
      />
    </View>

          <CustomButton text="Send Code" onPress={onSendCodePressed} />

        <CustomButton
          text="Back to Login"
          onPress={onBacktoLoginPressed}
          bgColor="Transparent"
          fgColor="#ffffff"
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    margin: 20,
    paddingTop: 40,
  },
  text: {
    color: 'gray',
    marginVertical: 30,
  },
  Link: {
    color: '#ffffff',
  },
  root1: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 10,
    paddingEnd: 10,
  },
  container:{
    backgroundColor:'#ffffff',
    width: '100%',
    borderColor:'#404040',
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color:'black',
  },
});

export default ForgetPassword;
