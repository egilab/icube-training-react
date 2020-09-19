import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {DummyProducts} from '../../data';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {DummyProducts.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <View>
              <Image style={styles.imgProduct} source={val.img} />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productItemName}>{val.name}</Text>
              <Text style={styles.productItemPrice}>{val.price}</Text>
              <Text>Qty : 2</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text style={styles.textTotal}>Total : Rp. 3000.000</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    marginBottom: 30,
    borderRadius: 8,
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    marginLeft: 20,
  },
  imgProduct: {
    width: 80,
    height: 80,
  },
  textTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
export default Cart;
