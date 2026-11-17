// Arquivo: src/components/FiltroCategoria.js
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FiltroCategoria({ categorias, ativa, aoSelecionar }) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categorias.map((categoria) => {
          const selecionada = categoria === ativa;
          return (
            <TouchableOpacity
              key={categoria}
              style={[styles.chip, selecionada && styles.chipAtivo]}
              activeOpacity={0.8}
              onPress={() => aoSelecionar(categoria)}
            >
              <Text style={[styles.chipTexto, selecionada && styles.chipTextoAtivo]}>
                {categoria}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 14,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  chipAtivo: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  chipTexto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  chipTextoAtivo: {
    color: '#FFFFFF',
  },
});
