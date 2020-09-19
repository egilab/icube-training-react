import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Category} from '../pages';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#34495e',
          justifyContent: 'center',
        },
        labelStyle: {
          color: '#1abc9c',
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
