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
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';
import { ProductCard } from '../components/ProductCard';
import { MenuCategoryCard } from '../components/MenuCategoryCard';
import logo from '../images/logo.png';

const PRODUCTS = [
  {
    id: '1',
    name: 'Pollo Entero Fresco',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Leche Entera 1L',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Pan Integral',
    price: '$1.99',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Manzanas Rojas',
    price: '$3.99/kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6c1c5?w=300&h=200&fit=crop',
  },
  {
    id: '5',
    name: 'Arroz Blanco 1kg',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
  },
  {
    id: '6',
    name: 'Huevos Frescos x12',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1518569656558-1ea25c4b9a5a?w=300&h=200&fit=crop',
  },
  {
    id: '7',
    name: 'Tomates Frescos',
    price: '$2.99/kg',
    image: 'https://images.unsplash.com/photo-1546470427-5c0b4b5c8a0a?w=300&h=200&fit=crop',
  },
  {
    id: '8',
    name: 'Queso Cheddar',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
  },
  {
    id: '9',
    name: 'Aceite de Oliva',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop',
  },
  {
    id: '10',
    name: 'Yogurt Natural',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1571212058562-8dca9cbf70d7?w=300&h=200&fit=crop',
  },
  {
    id: '11',
    name: 'Pasta Espagueti',
    price: '$1.79',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=300&h=200&fit=crop',
  },
  {
    id: '12',
    name: 'Café Molido',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
  },
  {
    id: '13',
    name: 'Avena Integral',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
  },
  {
    id: '14',
    name: 'Mantequilla',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop',
  },
  {
    id: '15',
    name: 'Zanahorias',
    price: '$1.99/kg',
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop',
  },
  {
    id: '16',
    name: 'Atún en Lata',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop',
  },
  {
    id: '17',
    name: 'Cebolla',
    price: '$1.49/kg',
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&h=200&fit=crop',
  },
  {
    id: '18',
    name: 'Salmón Fresco',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop',
  },
  {
    id: '19',
    name: 'Miel Natural',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop',
  },
  {
    id: '20',
    name: 'Papas',
    price: '$2.49/kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop',
  },
  {
    id: '21',
    name: 'Cereal Integral',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
  },
  {
    id: '22',
    name: 'Limones',
    price: '$3.99/kg',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
  },
  {
    id: '23',
    name: 'Jamón Cocido',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop',
  },
  {
    id: '24',
    name: 'Galletas Integrales',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop',
  },
  {
    id: '25',
    name: 'Aguacate',
    price: '$4.99/kg',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=200&fit=crop',
  },
  {
    id: '26',
    name: 'Té Verde',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
  },
  {
    id: '27',
    name: 'Chocolate Negro',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=200&fit=crop',
  },
  {
    id: '28',
    name: 'Nueces',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
  },
  {
    id: '29',
    name: 'Pepino',
    price: '$2.99/kg',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=200&fit=crop',
  },
  {
    id: '30',
    name: 'Salsa de Tomate',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1546470427-5c0b4b5c8a0a?w=300&h=200&fit=crop',
  },
  {
    id: '31',
    name: 'Pechuga de Pollo',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop',
  },
  {
    id: '32',
    name: 'Mango',
    price: '$5.99/kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6c1c5?w=300&h=200&fit=crop',
  },
  {
    id: '33',
    name: 'Vinagre Balsámico',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop',
  },
  {
    id: '34',
    name: 'Fresas',
    price: '$4.99/kg',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=200&fit=crop',
  },
  {
    id: '35',
    name: 'Queso Mozzarella',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
  },
  {
    id: '36',
    name: 'Ajo',
    price: '$1.99/kg',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6d5aa2?w=300&h=200&fit=crop',
  },
];

const MENU_CATEGORIES = [
  {
    id: '1',
    name: 'Picaderas',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Carnes',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Vinos',
    image: 'https://images.unsplash.com/photo-1506377247375-2a5f3f3b8c7b?w=400&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Congelados',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
  },
  {
    id: '5',
    name: 'Lácteos',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=200&fit=crop',
  },
];

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

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [activeSection, setActiveSection] = useState<'Productos' | 'Menú'>('Productos');

  const handleProductPress = (id: string) => {
    console.log(`Producto seleccionado: ${id}`);
  };

  const handleMenuCategoryPress = (id: string) => {
    console.log(`Categoría del menú seleccionada: ${id}`);
  };

  const renderProduct = ({ item }: { item: typeof PRODUCTS[0] }) => (
    <ProductCard
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      onPress={handleProductPress}
    />
  );


  const renderMenuCategory = ({ item }: { item: typeof MENU_CATEGORIES[0] }) => (
    <MenuCategoryCard
      id={item.id}
      name={item.name}
      image={item.image}
      onPress={handleMenuCategoryPress}
    />
  );

  // Componente para el header fijo
  const renderHeader = () => (
    <View>
        {/* Header */}
        <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Sirena GO</Text>
        </View>
          <TouchableOpacity style={styles.cartButton}>
          <Icon name="cart-outline" size={24} color={colors.black} />
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

        {/* Section Navigation */}
        <View style={styles.sectionNavigation}>
          <TouchableOpacity
            style={[
              styles.sectionTextContainer,
              activeSection === 'Productos' && styles.activeSectionContainer
            ]}
            onPress={() => setActiveSection('Productos')}
          >
            <Text style={[styles.sectionText, activeSection === 'Productos' && styles.activeSectionText]}>
              Productos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sectionTextContainer,
              activeSection === 'Menú' && styles.activeSectionContainer
            ]}
            onPress={() => setActiveSection('Menú')}
          >
            <Text style={[styles.sectionText, activeSection === 'Menú' && styles.activeSectionText]}>
              Menú
            </Text>
          </TouchableOpacity>
        </View>

      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Section Title */}
      <View style={styles.dynamicContent}>
        <Text style={styles.sectionTitle}>
          {activeSection === 'Productos' ? 'Productos Destacados' : 'Categorías del Menú'}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {activeSection === 'Productos' ? (
        <FlatList
          key="productos-grid"
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsScrollContainer}
          columnWrapperStyle={styles.productRow}
          ItemSeparatorComponent={() => <View style={styles.productSeparator} />}
          ListHeaderComponent={renderHeader}
        />
      ) : (
        <FlatList
          key="menu-list"
          data={MENU_CATEGORIES}
          renderItem={renderMenuCategory}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsScrollContainer}
          ItemSeparatorComponent={() => <View style={styles.productSeparator} />}
          ListHeaderComponent={renderHeader}
        />
      )}
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.softGold,
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
  sectionNavigation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    justifyContent: 'center',
  },
  sectionTextContainer: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginHorizontal: 2,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.gray500,
  },
  activeSectionText: {
    color: colors.oceanBlue,
    fontWeight: '700',
  },
  activeSectionContainer: {
    borderBottomColor: colors.oceanBlue,
  },
  separator: {
    height: 1,
    backgroundColor: colors.sandGray,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  dynamicContent: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  productsScrollContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  productSeparator: {
    height: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 16,
  },
});


