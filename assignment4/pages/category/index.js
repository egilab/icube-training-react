import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyCategory} from '../../data';

const Category = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.pageTitle}>Category List</Text>
      </View>
      <ScrollView>
        {DummyCategory.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductList', {
                  categoryName: val.name,
                })
              }>
              <Text style={styles.listName}>{val.name}</Text>
            </TouchableOpacity>
            {val.child.length > 0 &&
              val.child.map((valchild) => (
                <View key={valchild.id} style={styles.listChild}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductList', {
                        categoryName: valchild.name,
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
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
