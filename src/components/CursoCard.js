// Arquivo: src/components/CursoCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CursoCard({ curso, matriculado, onToggleMatricula }) {
  const vagasRestantes = matriculado ? curso.vagas - 1 : curso.vagas;

  return (
    <View style={[styles.card, matriculado && styles.cardMatriculado]}>
      <View style={styles.linhaTopo}>
        <View style={styles.badgeCategoria}>
          <Text style={styles.badgeCategoriaTexto}>{curso.categoria}</Text>
        </View>
        <Text style={styles.nivelTexto}>
          {curso.nivel} • {curso.cargaHoraria}
        </Text>
      </View>

      <Text style={styles.titulo}>{curso.titulo}</Text>
      <Text style={styles.descricao}>{curso.descricao}</Text>

      <View style={styles.infoRodape}>
        <Text style={styles.instrutor}>Instrutor(a): {curso.instrutor}</Text>
        <Text style={[styles.vagas, matriculado && styles.vagasDestaque]}>
          {vagasRestantes} vagas disponíveis
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.botao, matriculado ? styles.botaoMatriculado : styles.botaoPadrao]}
        activeOpacity={0.85}
        onPress={onToggleMatricula}
      >
        <Text style={styles.textoBotao}>
          {matriculado
            ? '✓ Matriculado (Toque para cancelar)'
            : 'Garantir Vaga'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  cardMatriculado: {
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
  },
  linhaTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeCategoria: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeCategoriaTexto: {
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  nivelTexto: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 12,
  },
  infoRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 10,
    marginBottom: 12,
  },
  instrutor: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '500',
  },
  vagas: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '700',
  },
  vagasDestaque: {
    color: '#059669',
  },
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPadrao: {
    backgroundColor: '#2563EB',
  },
  botaoMatriculado: {
    backgroundColor: '#10B981',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
