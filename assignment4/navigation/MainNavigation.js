import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductList, ProductDetail, Cart} from '../pages';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
export default MainNavigation;
