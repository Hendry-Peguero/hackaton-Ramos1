import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  onPress: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  price, 
  image, 
  onPress, 
  id 
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(id)}
      accessibilityRole="button"
      accessibilityLabel={`Ver producto ${name}`}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 6,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.sandGray,
  },
  image: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: colors.sandGray,
  },
  content: {
    padding: 8,
  },
  name: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 4,
    height: 28,
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.oceanBlue,
  },
});
