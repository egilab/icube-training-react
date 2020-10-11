import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductList, ProductDetail, Cart} from '../pages';
import BottomNavigation from './BottomNavigation';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.cartTitle}>Cart</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.cartTitle}>Cart</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginRight: 15,
  },
});
export default MainNavigation;
