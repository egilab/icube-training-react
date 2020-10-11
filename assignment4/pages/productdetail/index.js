import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  useWindowDimensions,
  ToastAndroid,
} from 'react-native';
import Toast from 'react-native-toast-message';
import HTML from 'react-native-render-html';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const PRODUCT_DETAIL = gql`
  query Product($sku: String!) {
    products(filter: {sku: {eq: $sku}}) {
      items {
        id
        name
        description {
          html
        }
        image {
          url
        }
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const ADD_TO_CART = gql`
  mutation addSimpleProductsToCart(
    $cartkey: String!
    $qty: Float!
    $sku: String!
  ) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cartkey
        cart_items: {data: {quantity: $qty, sku: $sku}}
      }
    ) {
      cart {
        id
        total_quantity
      }
    }
  }
`;

const CART_ID = gql`
  mutation {
    createEmptyCart
  }
`;

const ProductDetail = ({navigation, route}) => {
  const {sku} = route.params;
  const [valid, setValidImage] = useState(true);
  const noimage = 'https://swiftpwa.testingnow.me/assets/img/placeholder.png';
  const response = useQuery(PRODUCT_DETAIL, {
    variables: {sku: sku},
  });

  const [qtyInput, setQty] = useState('1');
  const [getCartId] = useMutation(CART_ID);
  const [addToCart] = useMutation(ADD_TO_CART);
  const contentWidth = useWindowDimensions().width;
  if (loading) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  const {loading, error, data} = response;
  let image_url;
  let price;
  let description = '<p></p>';
  let name;
  if (data !== undefined) {
    const products = data !== undefined ? data.products.items[0] : '';
    image_url = products.image.url;
    name = products.name;
    description = products.description.html;
    price = `${
      products.price_range.minimum_price.final_price.currency
    } ${products.price_range.minimum_price.final_price.value.toFixed(2)}`;
  }

  const handleQty = (val) => {
    setQty(val);
  };

  const handleCart = async () => {
    console.log(parseFloat(3));
    let cartkey = await AsyncStorage.getItem('carttoken');
    if (cartkey === null) {
      await getCartId()
        .then((res) => {
          const carttoken = res.data.createEmptyCart;
          cartkey = AsyncStorage.setItem('carttoken', carttoken);
        })
        .catch((e) => {
          ToastAndroid.show(e.message, ToastAndroid.LONG);
        });
    }

    addToCart({
      variables: {
        cartkey,
        sku,
        qty: parseFloat(qtyInput),
      },
    })
      .then((res) => {
        ToastAndroid.show('success add to cart', ToastAndroid.LONG);
      })
      .catch((e) => {
        ToastAndroid.show(
          e.message + ' Silahkan add to cart dari category gear -> watch',
          ToastAndroid.LONG,
        );
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productArea}>
          <View>
            <Image
              onError={() => setValidImage(false)}
              style={styles.imgProduct}
              source={{uri: valid ? image_url : noimage}}
            />
          </View>
          <View>
            <Text style={styles.productTitle}>{name}</Text>
            <Text>{`SKU : ${sku}`}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <HTML html={description} contentWidth={contentWidth} />
          </View>
          <View style={styles.formArea}>
            <TextInput
              style={styles.inputCart}
              value={qtyInput}
              keyboardType="numeric"
              onChangeText={(val) => handleQty(val)}
            />
            <TouchableOpacity
              style={styles.buttonCart}
              onPress={() => handleCart()}>
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
