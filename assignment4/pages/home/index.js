import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
import {SliderBox} from 'react-native-image-slider-box';

const HOMEPAGE_SLIDER = gql`
  query HomepageSlider {
    getHomepageSlider {
      images {
        mobile_image_url
      }
    }
  }
`;

const TOP_PRODUCTS = gql`
  query Category {
    categoryList(filters: {ids: {eq: "45"}}) {
      id
      name
      description
      products {
        items {
          id
          name
          sku
          sale
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

const Home = ({navigation}) => {
  const response = useQuery(TOP_PRODUCTS);
  const sliderResponse = useQuery(HOMEPAGE_SLIDER);
  const {loading, error, data} = response;
  const [valid, setValidImage] = useState(true);
  const [slider, setSlider] = useState([]);
  const noimage = 'https://swiftpwa.testingnow.me/assets/img/placeholder.png';
  useEffect(() => {
    if (sliderResponse.data !== undefined) {
      setSlider(sliderResponse.data.getHomepageSlider.images);
    }
  }, [sliderResponse.data]);

  if (loading) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  const topProducts = data.categoryList[0].products.items;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.pageTitle}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartTitle}>Cart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Banner images={slider} />
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Product</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.productList}>
              {topProducts.map((val, index) => (
                <View key={index} style={styles.productItem}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', {
                        sku: val.sku,
                      })
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
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Banner = (props) => {
  const bannr = props.images;
  let sourceImage = [];
  bannr.map((val) => {
    sourceImage.push(val.mobile_image_url);
  });
  return <SliderBox images={sourceImage} />;
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  pageScreenTitle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  imgBanner: {
    width: win.width,
    height: 350 * (win.width / 700),
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  productItem: {
    width: 110,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  productInfo: {
    justifyContent: 'center',
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
    width: 110,
    height: 90,
    marginBottom: 10,
  },
});

export default Home;
