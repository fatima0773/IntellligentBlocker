/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import * as React from 'react';
import BlockedCalls from './BlockedCalls';
import MissedCalls from './MissedCalls';
import SpamCalls from './SpamCalls';


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
                justifyContent: 'space-between',
        },
      }}>
      <Tab.Screen name="Missed " component={MissedCalls} />
      <Tab.Screen name="Spam " component={SpamCalls}  />
      <Tab.Screen name="Blocked " component={BlockedCalls}  />
      </Tab.Navigator>

  );
}



