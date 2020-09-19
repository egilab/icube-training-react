import React from 'react';
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
import {DummyProducts} from '../../data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.pageTitle}>Home</Text>
      </View>
      <ScrollView>
        <Image
          style={styles.imgBanner}
          source={require('../../assets/banner.jpg')}
        />
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Product</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.productList}>
              {DummyProducts.map((val, index) => (
                <View key={index} style={styles.productItem}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', {
                        productId: val.id,
                      })
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
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
