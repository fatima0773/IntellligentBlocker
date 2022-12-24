/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ContactUs = function () {
    return (
        <View>
            <Text style={styles.Textformat}>Messages</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    Textformat: {
      color: Colors.black,
    },
});

export default ContactUs;