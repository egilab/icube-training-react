import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../../data';

const ProductList = ({navigation, route}) => {
  const {categoryName} = route.params;
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{categoryName} </Text>
          </View>
          <View style={styles.productList}>
            {DummyProducts.map((val, index) => (
              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', {productId: val.id})
                  }>
                  <Image style={styles.imgProductList} source={val.img} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productItemName}>{val.name}</Text>
                    <Text style={styles.productItemPrice}>{val.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: `${100 / 4}%`,
    marginBottom: 20,
    margin: 10,
  },
  productInfo: {
    alignItems: 'center',
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  imgProductList: {
    alignItems: 'center',
    width: 110,
    height: 90,
    marginBottom: 10,
  },
});

export default ProductList;
