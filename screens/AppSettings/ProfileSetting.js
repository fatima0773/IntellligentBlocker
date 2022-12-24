/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileSetting = function ({ navigation }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [press, setPress] = useState(true);
  const [press1, setPress1] = useState(true);
  const [press2, setPress2] = useState(true);


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
            <StatusBar />
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.spacing}>
                    <TouchableOpacity>
                    <MaterialIcons name="person" size={150} color="black"/>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            value={Name}
                            onChangeText={setName}
                            placeholder="Name"
                            placeholderTextColor={'white'}
                            style={styles.input}
                        />
                <TouchableOpacity ><MaterialIcons name={press ? 'edit' : 'done'}   style={styles.edit1} size={20}  color="white" onPress={()=> setPress(!press)} /></TouchableOpacity>


                    </View>
                    <View style={styles.container}>
                        <TextInput
                            value={Email}
                            onChangeText={setEmail}
                            placeholder="email@gmail.com"
                            placeholderTextColor={'white'}
                            style={styles.input}
                        />
                <TouchableOpacity ><MaterialIcons name={press1 ? 'edit' : 'done'}   style={styles.edit1} size={20}  color="white" onPress={()=> setPress1(!press1)} /></TouchableOpacity>


                    </View>

                    <View style={styles.container}>
                        <TextInput
                            value={Password}
                            onChangeText={setPassword}
                            placeholder="Password"
                            placeholderTextColor={'white'}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                <TouchableOpacity ><MaterialIcons name={press2 ? 'edit' : 'done'}   style={styles.edit1} size={20}  color="white" onPress={()=> setPress2(!press2)} /></TouchableOpacity>


                    </View>







                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Textformat: {
        color: '#ffffff',
        paddingLeft : 10,
    },

    root: {
        alignItems: 'center',
        borderColor: '#000000',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,

      },
      Logo: {
        width: 170,
        height: 170,
        backgroundColor: '#3B71F3',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
          borderWidth: 1,



      },
      root1: {
        flex: 1,
        backgroundColor: '#000000',
          paddingEnd: 10,


    },

      container:{
        backgroundColor:'#000000',
        width: '100%',
        height:'18%',
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
    edit: {
        paddingLeft: 0,

    },
    edit1: {
        paddingLeft: 0,

    },
    edit2: {
        paddingLeft: 0,

      },
     input: {

       color: 'white',
    },
    spacing: {
        height: 170,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        paddingBottom: 10,
        marginBottom: 15,



     },

});
export default ProfileSetting;
