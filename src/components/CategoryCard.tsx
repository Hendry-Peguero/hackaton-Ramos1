import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  onPress: (name: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(name)}
      accessibilityRole="button"
      accessibilityLabel={`Ver categoría ${name}`}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 8,
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
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
  },
});

