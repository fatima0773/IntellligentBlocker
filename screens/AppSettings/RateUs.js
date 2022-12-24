/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, TextInput,Text, SafeAreaView, StyleSheet, TouchableOpacity,Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import Logo from '../../assets/Splash.png';


export default function ProfileSettings({ navigation }) {


    const [Feedback, setFeedBack] = useState('');
    const [defaultRating, setDefaultRating] = useState(5);
        // To set the max number of Stars
        // eslint-disable-next-line no-unused-vars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

        // Filled Star. You can also give the path from local
    const starImageFilled =
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        // Empty Star. You can also give the path from local
    const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    const back = function(){
      navigation.replace('Settings');
  };
  React.useLayoutEffect(() => {
      navigation.setOptions({
          headerLeft: () => <TouchableOpacity><MaterialIcons name="arrow-back" size={24}  color="white" onPress={back}/></TouchableOpacity>,
      });
  }, [navigation, back]);

    const CustomRatingBar = () => {
          return (
            <View style={styles.customRatingBarStyle}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setDefaultRating(item)}>
                    <Image
                      style={styles.starImageStyle}
                      source={
                        item <= defaultRating
                          ? { uri: starImageFilled }
                          : { uri: starImageCorner }
                      }
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        };


     return (
        <SafeAreaView style={styles.container}>
        <View >
         <View style={styles.root}>
            <Image
            source={Logo}
            style={styles.Logo}
                         resizeMode="contain" />
                 </View>
      <Text style={styles.textStyleSmall}>Please Rate Us</Text>
      {/*View to hold our Stars*/}
      <CustomRatingBar />
      <Text style={styles.textStyle}>
        {/*To show the rating selected*/}
        {defaultRating} / {Math.max.apply(null, maxRating)}
      </Text>
      <Text style={styles.textStyle}>How was your experience</Text>
      <View style={styles.container1}>
         <TextInput
            value={Feedback}
            onChangeText={setFeedBack}
                placeholder="What are your comments about us..."
                placeholderTextColor={'white'}
                           style={styles.input1}
               multiline={true}


          />
        </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={back}>
        {/*Clicking on button will show the rating as an alert*/}
        <Text style={styles.buttonTextStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
    Textformat: {
        color: 'grey',
        paddingLeft: 10,
        size: 14,
    },
    paragraph: {
        color: '#ffffff',
        size: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 30,
        paddingTop:0,
        justifyContent: 'center',
        textAlign: 'center',
      },
      textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
      },
      root: {
        alignItems: 'center',
        padding: 29,
        paddingTop: 0,
        paddingBottom:0,
        borderColor: '#000000',
      },
      Logo: {
        width: 100,
        maxWidth: 150,
        maxHeight: 150,
        height: 150,
        borderColor: '#000000',
        paddingTop: 10,
        paddingBottom: 20,
      },
      textStyleSmall: {
        textAlign: 'center',
        fontSize: 23,
        paddingTop:10,
        color: '#ffffff',

      },
      buttonStyle: {
        backgroundColor:'#3B71F3',
        width: '100%',

        padding: 15,
        marginTop:15,
        paddingEnd:5,

        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 5,
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'bold',
      },
      customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
      },
      starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
  },
  container1:{
    backgroundColor:'transparent',
    width: 'auto',
    height:'25%',
    borderColor:'#404040',
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
      marginVertical: 5,

 },

  input1: {

      color: 'white',

  },

});
