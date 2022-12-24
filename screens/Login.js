/* eslint-disable prettier/prettier */
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import Logo from '../assets/Splash.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Login = function ({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [press, setPress] = useState(true);
  const onSignInPressed = function () {
    navigation.replace('HomeScreen');
  };
  const onForgotPasswordPressed = function () {
    navigation.replace('ForgetPassword');
  };
  const onSignUpPressed = function () {
    navigation.replace('SignUp');
  };


  return (
    <SafeAreaView style={styles.root1}>
       <StatusBar />
      <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.Logo}
          resizeMode="contain"
        />
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
          value={password}
          onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={press}
            />
                    <TouchableOpacity ><MaterialIcons name={press ? 'visibility-off' : 'visibility'}   style={styles.edit1} size={20}  color="black" onPress={()=> setPress(!press)} /></TouchableOpacity>

    </View>

        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forget password"
          onPress={onForgotPasswordPressed}
          bgColor="transparent"
          fgColor="#FFFFFF"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          bgColor="transparent"
          fgColor="#FFFFFF"
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 29,
    borderColor: '#000000',
  },
  Logo: {
    width: 100,
    maxWidth: 150,
    maxHeight: 150,
    height: 150,
    borderColor: '#000000',
    paddingTop: 20,
    paddingBottom: 200,
  },
  root1: {
    flex: 1,
    backgroundColor: '#000000',
   paddingTop:50,
   paddingEnd: 10,
  },
  container:{
    backgroundColor:'#ffffff',
    width: '100%',
    height:'9%',
    borderColor:'#404040',
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


 },
 input: {

   color: 'black',
  },
  edit1: {
    paddingLeft: 0,

},
});

export default Login;
