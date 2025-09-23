import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MenuCategoryCard } from '../components/MenuCategoryCard';
import { colors } from '../theme/colors';

const DELI_CATEGORIES = [
  {
    id: '1',
    name: 'Carnicería',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Pegadería',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Panadería',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=200&fit=crop',
  },
];

export default function DeliScreen() {
  const handleMenuCategoryPress = (id: string) => {
    console.log(`Categoría del deli seleccionada: ${id}`);
  };

  const renderMenuCategory = ({ item }: { item: typeof DELI_CATEGORIES[0] }) => (
    <MenuCategoryCard
      id={item.id}
      name={item.name}
      image={item.image}
      onPress={handleMenuCategoryPress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Deli</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Categorías del Deli</Text>
        <FlatList
          data={DELI_CATEGORIES}
          renderItem={renderMenuCategory}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.sandGray,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingBottom: 20,
  },
  separator: {
    height: 12,
  },
});
