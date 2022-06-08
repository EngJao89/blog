import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import CategoryItem from '../../components/CategoryItem';
import api from '../../services/api';

export default function Home() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      const category = await api.get("/api/categories?populate=icon");
      setCategories(category.data.data);
    }
    loadData();
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>DevBlog</Text>

        <TouchableOpacity onPress={ () => navigation.navigate("Search")}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList 
        style={styles.categories} 
        data={categories} 
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (<CategoryItem />)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232630'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24
  },
  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold'
  }
});