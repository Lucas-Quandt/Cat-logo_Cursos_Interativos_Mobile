// Arquivo: src/components/HeaderCatalogo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderCatalogo({ titulo, subtitulo, totalInscritos }) {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
      </View>

      <View style={styles.badgeContainer}>
        <Text style={styles.badgeNumero}>{totalInscritos}</Text>
        <Text style={styles.badgeLabel}>
          {totalInscritos === 1 ? 'Matrícula' : 'Matrículas'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textos: {
    flex: 1,
    paddingRight: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  subtitulo: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 4,
  },
  badgeContainer: {
    backgroundColor: '#10B981',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 74,
  },
  badgeNumero: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 22,
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#ECFDF5',
    marginTop: 2,
  },
});
