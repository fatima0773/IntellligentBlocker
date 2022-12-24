/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Messages from './Messages';
import Schedule from './Schedule';
import Call from './Call';
import BlockSetting from './BlockSetting';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();
function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Call"
            screenOptions={{
                tabBarContentContainerStyle: {
                    backgroundColor: 'black',


                },
            }}
        >
            <Tab.Screen name="Call" component={Call} options={{
                title: ({focused})=> <MaterialIcons name="call" size={focused ? 20 : 18} color={focused ? '#3B71F3' : '#ffffff'} />,
            }}/>
            <Tab.Screen name="Messages" component={Messages} options={{
                title: ({ focused})=> <MaterialIcons name="message" size={focused ? 20 : 18} color={focused ? '#3B71F3' : '#ffffff'} />,
            }} />
            <Tab.Screen name="Schedule" component={Schedule} options={{
                title: ({ focused})=> <MaterialIcons name="timer" size={focused ? 20 : 18} color={focused ? '#3B71F3' : '#ffffff'} />,
            }} />
            <Tab.Screen name="BlockSetting" component={BlockSetting} options={{
                title: ({ focused})=> <MaterialIcons name="security" size={focused ? 20 : 18} color={focused ? '#3B71F3' : '#ffffff'} />,
            }}/>


            </Tab.Navigator>
    );
}
export default function Home({ navigation }) {
    const setting = function () {
        navigation.replace('Settings');
      };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <TouchableOpacity><MaterialIcons name="settings" size={20} color="white" onPress={setting}/></TouchableOpacity>,
        });
      }, [navigation, setting]);
  return (
    <Tabs/>
  );
}
