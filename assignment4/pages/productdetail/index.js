import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyProducts} from '../../data';

const ProductDetail = ({navigation, route}) => {
  const {productId} = route.params;
  const [productDetail, setProductDetail] = useState('');

  useEffect(() => {
    const getData = () => {
      DummyProducts.map((val) => {
        if (val.id === productId) {
          setProductDetail({
            id: val.id,
            name: val.name,
            price: val.price,
            description: val.description,
            img: val.img,
          });
        }
      });
    };
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productArea}>
          <View>
            <Image style={styles.imgProduct} source={productDetail.img} />
          </View>
          <View>
            <Text style={styles.productTitle}>{productDetail.name}</Text>
            <Text style={styles.productPrice}>{productDetail.price}</Text>
            <Text>{productDetail.description}</Text>
          </View>
          <View style={styles.formArea}>
            <TextInput style={styles.inputCart} placeholder="1" />
            <TouchableOpacity
              style={styles.buttonCart}
              onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.textCart}>Add To Cart</Text>
            </TouchableOpacity>
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
  productArea: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  formArea: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonCart: {
    backgroundColor: '#e74c3c',
    padding: 10,
    width: 150,
    height: 40,
    alignItems: 'center',
    marginLeft: 20,
  },
  inputCart: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 50,
    height: 40,
    textAlign: 'center',
    color: 'black',
  },
  textCart: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  imgProduct: {
    alignSelf: 'center',
    width: 250,
    height: 230,
    marginBottom: 20,
  },
});
export default ProductDetail;
