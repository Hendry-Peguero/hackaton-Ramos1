import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';
import { CategoryCard } from '../components/CategoryCard';
import { Chip } from '../components/Chip';

const CATEGORIES = [
  {
    id: '1',
    name: 'Carnes',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Frutas y Verduras',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Lácteos y Huevos',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Panadería',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
  },
  {
    id: '5',
    name: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop',
  },
  {
    id: '6',
    name: 'Snacks',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
  },
];

const CHIPS = ['Categorías', 'Ofertas', 'Novedades', 'Favoritos'];

export default function HomeScreen() {
  const [activeChip, setActiveChip] = useState('Categorías');
  const [searchText, setSearchText] = useState('');

  const handleCategoryPress = (name: string) => {
    console.log(`Categoría seleccionada: ${name}`);
  };

  const renderCategory = ({ item }: { item: typeof CATEGORIES[0] }) => (
    <CategoryCard
      id={item.id}
      name={item.name}
      image={item.image}
      onPress={handleCategoryPress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Deli</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Icon name="cart-outline" size={24} color={colors.text} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={20} color={colors.gray500} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar productos"
            placeholderTextColor={colors.gray400}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Chips */}
        <View style={styles.chipsContainer}>
          {CHIPS.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              active={chip === activeChip}
              onPress={() => setActiveChip(chip)}
            />
          ))}
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  chipsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    gap: 12,
  },
});

