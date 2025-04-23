import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function PhotosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Галерея</Text>
      <View style={styles.grid}>
        <Image source={{ uri: 'https://alumni.ztu.edu.ua/wp-content/uploads/2021/10/dsc06673-e1634973313446.jpg' }} style={styles.image} />
        <Image source={{ uri: 'https://alumni.ztu.edu.ua/wp-content/uploads/2021/10/frame-6-1536x1024.png' }} style={styles.image} />
        <Image source={{ uri: 'https://alumni.ztu.edu.ua/wp-content/uploads/2021/10/jou-1536x1024.png' }} style={styles.image} />
        <Image source={{ uri: 'https://alumni.ztu.edu.ua/wp-content/uploads/2019/11/photo_2019-11-19_15-20-23-825x510.jpg' }} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', paddingHorizontal: 15 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20, fontWeight: '600' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  image: { width: '48%', height: 150, marginBottom: 10, borderRadius: 10 },
});
