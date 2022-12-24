/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import PassMeter from 'react-native-passmeter';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const MAX_LEN = 15,
  MIN_LEN = 8,
  PASS_LABELS = ['password must be 8 characters', 'Weak', 'Normal', 'Strong'];

const SignUp = function ({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [press, setPress] = useState(true);
  const [press1, setPress1] = useState(true);





  const onRegisterPressed = function () {
    console.warn('User registered successfully');
  };

  const onSignInPressed = function () {
    navigation.replace('/');
  };
  const onPrivacyPressed = function () {
    console.warn('On Privacy Pressed');
  };


  const onTermOfUsePressed = function () {
    console.warn('On Term of Use Pressed');
  };




  return (
    <SafeAreaView style={styles.root1}>
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.container}>
       <TextInput
          value={username}
          onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={false}
      />
    </View>
    <View style={styles.container}>
       <TextInput
              value={email}
              onChangeText={ setEmail}

              placeholder="Email"
              placeholderTextColor={'black'}
          style={styles.input}
        />
          </View>

          <View style={styles.container}>
       <TextInput
          value={password}
          maxLength={15}
        onChangeText={password => setPassword(password)}
              placeholder="Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={press}
            />
                <TouchableOpacity ><MaterialIcons name={press ? 'visibility-off' : 'visibility'}   style={styles.edit1} size={20}  color="black" onPress={()=> setPress(!press)} /></TouchableOpacity>

            </View>
          <PassMeter
            style={styles.passmet}
        showLabels
        password={password}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
              />
          <View style={styles.container}>
       <TextInput
          value={confirmPassword}
              onChangeText={setConfirmPassword}
              maxLength={15}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              style={styles.input}
              secureTextEntry={press1}
            />
                <TouchableOpacity ><MaterialIcons name={press1 ? 'visibility-off' : 'visibility'}   style={styles.edit1} size={20}  color="black" onPress={()=> setPress1(!press1)} /></TouchableOpacity>

          </View>
          <Text style={styles.confirmPass} > Password not matched! </Text>

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.Link} onPress={onTermOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.Link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>


        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  input: {
    color:'black',
  },
  confirmPass: {
    color: 'red',
    width:'100%',
  },


});

export default SignUp;

