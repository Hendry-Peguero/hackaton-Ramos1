import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface ChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export function Chip({ label, active, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.activeChip]}
      onPress={onPress}
    >
      <Text style={[styles.chipText, active && styles.activeChipText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.pearlWhite,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.sandGray,
  },
  activeChip: {
    backgroundColor: colors.oceanBlue,
    borderColor: colors.oceanBlue,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  activeChipText: {
    color: colors.white,
    fontWeight: '600',
  },
});
