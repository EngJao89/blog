import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryPosts() {
  return (
    <View style={styles.container}>
      <Text>Posts de uma Categoria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});