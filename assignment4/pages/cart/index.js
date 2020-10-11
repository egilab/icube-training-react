import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const CART_LIST = gql`
  query Cart($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        id
        product {
          name
          sku
          thumbnail {
            url
          }
        }
        prices {
          price {
            value
            currency
          }
        }
        quantity
      }
      prices {
        grand_total {
          value
          currency
        }
      }
    }
  }
`;

const Cart = () => {
  const [cartId, setCartId] = useState('');
  AsyncStorage.getItem('carttoken')
    .then((res) => {
      setCartId(res);
    })
    .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG));
  const response = useQuery(CART_LIST, {
    variables: {cartId: cartId},
    fetchPolicy: 'network-only',
  });
  const {loading, error, data} = response;
  const carts = data !== undefined ? data.cart.items : [];
  const totals = data !== undefined ? data.cart.prices.grand_total : '';
  const [valid, setValidImage] = useState(true);

  if (loading) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }

  const noimage = 'https://swiftpwa.testingnow.me/assets/img/placeholder.png';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {carts.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <View>
              <Image
                onError={() => setValidImage(false)}
                style={styles.imgProduct}
                source={{uri: val.product.thumbnail.url}}
              />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productItemName}>{val.product.name}</Text>
              <Text
                style={
                  styles.productItemName
                }>{`SKU : ${val.product.sku}`}</Text>
              <Text style={styles.productItemPrice}>
                {`${val.prices.price.currency} ${parseInt(
                  val.prices.price.value,
                  10,
                ).toFixed(2)}`}
              </Text>
              <Text>Qty : {val.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text style={styles.textTotal}>
          {`Total : ${totals.currency} ${parseInt(totals.value, 10).toFixed(
            2,
          )}`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  pageScreenTitle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
