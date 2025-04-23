import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const { width } = useWindowDimensions(); // Отримуємо ширину екрана

  const imageSize = width * 0.3; // 20% від ширини екрана

  const news = Array(4).fill({
    title: 'Важлива подія',
    date: '16.04.2025',
    description: 'Опис останньої події у світі технологій.',
    image: 'https://cdn-icons-png.flaticon.com/512/21/21601.png',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Актуальні новини</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={[styles.imageContainer, { width: imageSize, height: imageSize }]}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa', paddingHorizontal: 20, paddingTop: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  imageContainer: {
    backgroundColor: '#3333',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  textBlock: { flex: 1, padding: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  date: { fontSize: 12, color: '#888' },
  description: { fontSize: 14, color: '#555' },
});
