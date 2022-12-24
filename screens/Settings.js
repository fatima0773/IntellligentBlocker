/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Settings({ navigation }) {
    const back = function(){
        navigation.replace('HomeScreen');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity><MaterialIcons name="arrow-back" size={24}  color="white" onPress={back}/></TouchableOpacity>,
        });
    }, [navigation, back]);

    const onProfileSettings = function () {
        navigation.replace('ProfileSettings');
    };

    const onLogout = function () {
        navigation.replace('/');
    };
    const onHelp = function () {
        navigation.replace('Help');
    };
    const onContactUs = function () {
        navigation.replace('ContactUs');
    };
    const onRateUs = function () {
        navigation.replace('RateUs');
      };
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView>
          <TouchableOpacity onPress={onProfileSettings}>
                <View style={styles.root}>
                <Text style={styles.TextStyle}>Profile Setting</Text>
                  </View>
          </TouchableOpacity>

                  <TouchableOpacity onPress={onHelp}>
              <View style={styles.root}>
            <Text style={styles.TextStyle}>Help</Text>

              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={onContactUs}>
        <View style={styles.root}>
            <Text style={styles.TextStyle}>Contact Us</Text>

          </View>

              </TouchableOpacity>

          <TouchableOpacity onPress={onRateUs}>
                <View style={styles.root}>
                    <Text style={styles.TextStyle}>Rate Us</Text>
                  </View>
            </TouchableOpacity>

      <TouchableOpacity onPress={onLogout}>
        <View style={styles.root}>
            <Text style={styles.TextStyle}>Logout</Text>

        </View>
       </TouchableOpacity>
    </ScrollView>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
    },
    root: {
        height: 50,
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#171717',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: 10,
    },
    TextStyle: {
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 0,
        fontWeight: 'bold',
        alignContent: 'space-between',

    },
    button: {
        alignSelf: 'flex-end',
        alignContent: 'space-between',
        paddingVertical: 15,
    },
});
