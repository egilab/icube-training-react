import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';

const CATEGORY_LIST = gql`
  {
    categoryList(filters: {ids: {eq: "2"}}) {
      children {
        id
        name
        url_key
        children {
          id
          name
          url_key
          children {
            id
            name
            url_key
          }
        }
      }
    }
  }
`;

const Category = ({navigation}) => {
  const response = useQuery(CATEGORY_LIST);
  const {loading, error, data} = response;
  if (loading) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }

  const category = data.categoryList;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.pageTitle}>Category List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartTitle}>Cart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {category[0].children.map((val, key) => (
          <View key={key} style={styles.listItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductList', {
                  idCategory: val.id,
                })
              }>
              <Text style={styles.listName}>{val.name}</Text>
            </TouchableOpacity>
            {val.children.length > 0 &&
              val.children.map((valchild) => (
                <View key={valchild.id} style={styles.listChild}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductList', {
                        idCategory: valchild.id,
                      })
                    }>
                    <Text>{valchild.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        ))}
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
  pageScreenTitle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
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
  listItem: {
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    marginBottom: 30,
    borderRadius: 8,
  },
  listChild: {
    paddingVertical: 15,
  },
  listName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Category;
