/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton/CustomButton';
import Logo from '../../assets/Splash.png';





  const ContactUs = function ({navigation}) {
    const [Email, setEmail] = useState('');
      const [Message, setMessage] = useState('');

    const onSendMessage = function () {
      navigation.replace('Settings');
      };
      const back = function () {
        navigation.replace('Settings');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity><MaterialIcons name="arrow-back" size={24} color="white" onPress={back} /></TouchableOpacity>,
        });
    }, [navigation, back]);

   return (
      <SafeAreaView style={styles.root1}>
        <ScrollView>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={styles.Logo}
            resizeMode="contain"
          />
        <View style={styles.container}>
         <TextInput
            value={Email}
            onChangeText={setEmail}
                placeholder="email@gmail.com"
                placeholderTextColor={'white'}
            style={styles.input}
        />
        </View>
        <View style={styles.container1}>
         <TextInput
            value={Message}
            onChangeText={setMessage}
                placeholder="What do you want to ask? type here"
                placeholderTextColor={'white'}
                           style={styles.input}
                           multiline = {true}
          />
        </View>
          <CustomButton text="Send Message" onPress={onSendMessage} />
    </View>
      </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      borderColor: '#000000',
      padding: 40,
      width: 'auto',
    },
    Logo: {
      width: 100,
      maxWidth: 150,
      maxHeight: 150,
      height: 150,
      borderColor: '#000000',
      marginBottom: 20,
    },
    root1: {
      flex: 1,
      backgroundColor: '#000000',
      paddingTop: 30,
      paddingbottom: 10,
      height: 'auto',
    },
    container:{
      backgroundColor:'transparent',
      width: '100%',
      height:'15%',
      borderColor: '#404040',
      borderWidth: 3,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginVertical: 5,
      },
      container1:{
        backgroundColor:'transparent',
        width: '100%',
        height: '25%',
        borderColor:'#404040',
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 5,

     },
   input: {

     color: 'white',
      },

  });

  export default ContactUs;
