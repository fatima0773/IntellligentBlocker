/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
const BlockSetting = function () {
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    if (toggle === true) {
        var color = '#3B71F3';
    }
    if (toggle1 === true) {
        var color1 = '#3B71F3';
    }
    if (toggle2 === true) {
        var color2 = '#3B71F3';
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.root}>
                    <Text style={styles.TextStyle}>Block all the unknown numbers</Text>

                    <View>
                    <Switch
                        style={styles.button}
                        thumbColor={color}
                        value={toggle} onValueChange={() => {
                            setToggle(!toggle);
                      }}
                    />
                    </View>
                </View>
                <View style={styles.root}>
                    <Text style={styles.TextStyle}>Block all the international numbers</Text>
                    <View>
                    <Switch
                        style={styles.button}
                        thumbColor={color1}
                        value={toggle1} onValueChange={() => {
                            setToggle1(!toggle1);
                      }}
                    />
                    </View>
                </View>
                <View style={styles.root}>
                    <Text style={styles.TextStyle}>Block all the spammers</Text>

                    <View>
                    <Switch
                        style={styles.button}
                        thumbColor={color2}
                        value={toggle2} onValueChange={() => {
                            setToggle2(!toggle2);
                      }}
                    />
                   </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
    },
    root: {
        height: 60,
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 20,
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

export default BlockSetting;