/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import EmailConfirm from './screens/EmailConfirm';
import ResetPassword from './screens/ResetPassword';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home';
import Settings from './screens/Settings';
import ProfileSettings from './screens/AppSettings/ProfileSetting';
import Help from './screens/AppSettings/Help';
import ContactUs from './screens/AppSettings/ContactUs';
import RateUs from './screens/AppSettings/RateUs';

const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <RootStack.Screen
        name="/"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="EmailConfirm"
        component={EmailConfirm}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="HomeScreen"
          component={Home}
          options={{
            title: 'Intelligent Blocker',
          }}
        />

        <RootStack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
          }}
        />
          <RootStack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            title: 'Profile Settings',
          }}
        />

                  <RootStack.Screen
          name="Help"
          component={Help}
          options={{
            title: 'Help',
          }}
        />
          <RootStack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Us',
          }}
        />
                  <RootStack.Screen
          name="RateUs"
          component={RateUs}
          options={{
            title: 'Rate Us',
          }}
        />
    </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
