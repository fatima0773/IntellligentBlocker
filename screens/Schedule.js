/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView,TouchableOpacity, Text, Modal, Alert, Pressable,ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import { FAB } from 'react-native-paper';
import { Switch } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';




const Schedule = function (navigation) {
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  var [s, setS] = useState([]);
  const [schedule, setSchedule] = useState(false);

  var [updateArray, setUpdateArray] = useState([]);
  const length = function (props) {
    <View style={styles.outerView1}>
      <Text> Every {props.daysz}</Text>
  </View>;
  };

  const scheduleBack = function () {
    setModalVisible(!modalVisible);
   };
  const setschedule = function () {
    setModalVisible(!modalVisible);
    setSchedule(!schedule);
  };
  if (toggle2 === true) {
    var color7 = '#3B71F3';
}

  const day = function() {
    setSelect(!select);
      if (select === true) {
        s.push('Mon');
    }
      else {
        updateArray = s.filter(el => el !== 'Mon');
        setS(updateArray);
    }
    };
    const day1 = () => {
      setSelect1(!select1);
        if (select1 === true) {
          s.push('Tue');
        }
        else {
          updateArray = s.filter(el => el !== 'Tue');
          setS(updateArray);
        }
  };
  const day2 = () => {
    setSelect2(!select2);
      if (select2 === true) {
        s.push('Wed');


    }
      else {
        updateArray = s.filter(el => el !== 'Wed');
        setS(updateArray);
    }
  };
  const day3 = () => {
    setSelect3(!select3);
      if (select3 === true) {
        s.push('Thu');

      } else {
        updateArray = s.filter(el => el !== 'Thu');
        setS(updateArray);
      }
  };
  const day4 = () => {
    setSelect4(!select4);
      if (select4 === true) {
        s.push('Fri');

      } else {
        updateArray = s.filter(el => el !== 'Fri');
        setS(updateArray);
      }
  };
  const day5 = () => {
    setSelect5(!select5);
      if (select5 === true) {
        s.push('Sat');

      } else {
        updateArray = s.filter(el => el !== 'Sat');
        setS(updateArray);
      }
  };
  const day6 = () => {
    setSelect6(!select6);
      if (select6 === true) {
        s.push('Sun');
        console.log(s);

        console.log(s.length);


      } else {
        updateArray = s.filter(el => el !== 'Sun');
        setS(updateArray);

      }
  };

    return (
        <>
        <SafeAreaView style={styles.container1}>
          <ScrollView>
            <View style={styles.container}>
             <MaterialIcons name="access-time" size={150} color="#171717"/>
          </View>
                {
             modalVisible === true &&     <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Silent mode set successfully');
          setModalVisible(!modalVisible);
        }}
      >
                  <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                    <View style={styles.close}>
                  <TouchableOpacity><MaterialIcons name="close" size={20} color="white" onPress={scheduleBack}/></TouchableOpacity>
                    </View>
                                    <Text style={styles.headerText}>From</Text>
                                    <DatePicker mode="time" date={new Date()} style={styles.scrollStyle} textColor="#fff" removeClippedSubviews={false} androidVariant="nativeAndroid" />
                                    {console.log(new Date().getHours())}
                                    <Text style={styles.headerText}>To</Text>
                    <DatePicker mode="time" date={new Date()} style={styles.scrollStyle} textColor="#fff" removeClippedSubviews={false} androidVariant="nativeAndroid" />
                                    <View style={styles.outerView}>
                      <Pressable onPress={day}>
                      <View style={{height: 25,
                             width: 25,
                            borderRadius: 20,
                             borderColor: select ? '#3B71F3' : 'black',
                             borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>M</Text>
                      </View>
                      </Pressable>
                      <Pressable onPress={day1}>
                      <View style={{height: 25,
                          width: 25,
                            borderRadius: 20,
                             borderColor: select1 ? '#3B71F3' : 'black',
                        borderWidth: 1,
                        }}
                        >
                                            <Text style={styles.textStyle}>T</Text>
                      </View>
                      </Pressable>
                      <Pressable onPress={day2}>
                      <View style={{height: 25,
                             width: 25,
                             borderRadius: 20,
                             borderColor: select2 ? '#3B71F3' : 'black',
                        borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>W</Text>
                      </View>
                      </Pressable>
                      <Pressable on onPress={day3}>
                      <View style={{height: 25,
                             width: 25,
                            borderRadius: 20,
                             borderColor: select3 ? '#3B71F3' : 'black',
                        borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>T</Text>
                      </View>
                      </Pressable>
                      <Pressable onPress={day4}>
                      <View style={{height: 25,
                             width: 25,
                             borderRadius: 20,

                             borderColor: select4 ? '#3B71F3' : 'black',
                        borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>F</Text>
                      </View>
                      </Pressable>
                      <Pressable onPress={day5}>
                      <View style={{height: 25,
                             width: 25,
                            borderRadius: 20,
                             borderColor: select5 ? '#3B71F3' : 'black',
                        borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>S</Text>
                      </View>
                      </Pressable>
                      <Pressable onPress={ day6}>
                      <View style={{
                        height: 25,
                             width: 25,
                            borderRadius: 20,
                             borderColor: select6 ? '#3B71F3' : 'black',
                             borderWidth: 1,
                      }}>
                                            <Text style={styles.textStyle}>S</Text>
                      </View>
                      </Pressable>
                      </View>

                    <View style={styles.daysMsg}>
                      <Text style={styles.textStyle}> Today </Text>
                      </View>

                    <View style={styles.root}>
                      <Text style={styles.TextStyle}>Silent Mode</Text>
                    <View>
                    <Switch
                        style={styles.buttons}
                        thumbColor={color7}
                        value={toggle2} onValueChange={() => {
                            setToggle2(!toggle2);
                      }}
                    />
                   </View>
            </View>

            <Pressable
              style={[styles.buttonClose]}
              onPress={setschedule}
            >
              <Text style={styles.textStyleButon}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            </View>
          }
            </ScrollView>
          <FAB
            icon="plus"
            visible={true}
            disabled={false}
            style={styles.fab}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </SafeAreaView>
    </>

    );
};
const styles = StyleSheet.create({
    Textformat: {
      color: Colors.white,
  },
  root1: {
    height: 40,
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 10,
},
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000000',
        alignContent: 'center',
        alignItems: 'center',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#3B71F3',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3B71F3',
        borderWidth: 1,
      },
      addText: {
        color: 'white',
        fontSize: 24,
    },
    container1: {
        flex: 1,
        backgroundColor: '#000000',
    },
    addposition: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 0,
        flexDirection: 'row',
        position: 'relative',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        backgroundColor: '#171717',
          padding: 35,
          height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
  },
  close: {
    flexDirection: 'row',
    alignContent:'flex-end',
    justifyContent: 'flex-end',
    display: 'flex',
    backgroundColor: 'black',
    marginEnd: 0,
    marginRight: 0,
    marginLeft:'95%',

      },
      button: {
        borderRadius: 20,
        padding: 10,
        paddingBottom: 0,
        elevation: 2,

      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        marginBottom: 0,
        borderRadius: 20,
        padding: 10,


      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,

  },
  textStyleButon: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
      modalText: {
        marginBottom: 15,
          textAlign: 'center',
        color: 'white',
    },
    scrollStyle: {
        backgroundColor: '#171717',
        shadowOpacity: 0,
        shadowRadius: 0,
        color: 'white',
    },
    outerView: {
        height: '10%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      marginBottom:10,
  },
  daysMsg: {
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
    height: '6%',
  width: '100%',
  marginBottom:10,
},
  outerView1: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'row',
    height: 50,
  width: '100%',
    paddingTop: 0,
    marginTop: 4,
  paddingBottom: 60,
},
    innerView:{
      height: 20,
      width: 20,
      backgroundColor: 'black',
      borderColor: '#3B71F3',
      borderWidth: 1,
    },
    headerText: {
      justifyContent: 'flex-start',
      color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
        alignItems: 'center',
    borderColor: '#3B71F3',
        backgroundColor: '#3B71F3',

  },
  root: {
height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'white',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
},
TextStyle: {
    color: 'white',
    paddingLeft: 10,
    paddingBottom: 0,
    fontWeight: 'bold',
    alignContent: 'space-between',
  },
  buttons: {
    alignSelf: 'flex-end',
    alignContent: 'space-between',
    paddingVertical: 15,

},
});

export default Schedule;