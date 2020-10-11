import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';

const PRODUCT_LIST = gql`
  query Category($id: String!) {
    categoryList(filters: {ids: {eq: $id}}) {
      id
      name
      products {
        items {
          id
          name
          sale
          sku
          price_range {
            maximum_price {
              final_price {
                value
                currency
              }
            }
          }
          thumbnail {
            url
          }
        }
      }
    }
  }
`;

const ProductList = ({navigation, route}) => {
  const {idCategory} = route.params;
  const [valid, setValidImage] = useState(true);
  const response = useQuery(PRODUCT_LIST, {
    variables: {id: idCategory},
  });
  if (loading) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  const {loading, error, data} = response;
  const product = data !== undefined ? data.categoryList[0].products.items : [];
  const categoryName =
    data !== undefined ? data.categoryList[0].name : 'loading...';
  const noimage = 'https://swiftpwa.testingnow.me/assets/img/placeholder.png';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{categoryName} </Text>
          </View>
          <View style={styles.productList}>
            {product.map((val, index) => (
              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', {sku: val.sku})
                  }>
                  <Image
                    onError={() => setValidImage(false)}
                    style={styles.imgProductList}
                    source={{uri: val.thumbnail.url}}
                  />
                  <View style={styles.productInfo}>
                    <Text style={styles.productItemName}>{val.name}</Text>
                    <Text style={styles.productItemPrice}>
                      {`${
                        val.price_range.maximum_price.final_price.currency
                      } ${parseInt(
                        val.price_range.maximum_price.final_price.value,
                        10,
                      ).toFixed(2)}`}
                    </Text>
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
    marginHorizontal: 20,
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  productItem: {
    width: `${100 / 3}%`,
    marginBottom: 20,
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
    alignSelf: 'center',
    width: 110,
    height: 90,
    marginBottom: 10,
  },
});

export default ProductList;
