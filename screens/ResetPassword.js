/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton/CustomButton';


const ResetPassword = function ({navigation}) {
  const [Password, setPassword] = useState('');
  const [CPassword, setCPassword] = useState('');
  const onBacktoLoginPressed = function () {
    navigation.replace('/');
  };

  const onSubmitPressed = function () {
    console.warn('Password changed successfully');
    navigation.replace('/');
  };

  return (
    <SafeAreaView style={styles.root1}>
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create New Password</Text>
        <View style={styles.container}>
       <TextInput
          value={Password}
          onChangeText={setPassword}
              placeholder="Enter new Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={false}
            />
          </View>
          <View style={styles.container}>
          <TextInput
          value={CPassword}
          onChangeText={setCPassword}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={false}
      />

          </View>

        <CustomButton text="Submit" onPress={onSubmitPressed} />



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

export default ResetPassword;
