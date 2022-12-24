/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import * as React from 'react';
import AllMessages from './AllMessages';
import SpamMessages from './SpamMessages';



import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();

export default function Call() {
  return (

      <Tab.Navigator
          screenOptions={{
              tabBarActiveTintColor: '#3B71F3',
              tabBarInactiveTintColor: '#ffffff',
              tabBarContentContainerStyle: {
                height: 50,
            backgroundColor: '#171717',
        },
      }}>
      <Tab.Screen name="All" component={AllMessages} />
      <Tab.Screen name="Spam" component={SpamMessages} />
      </Tab.Navigator>

  );
}
