// Arquivo: App.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CATEGORIAS, LISTA_CURSOS } from './src/data/cursos';
import HeaderCatalogo from './src/components/HeaderCatalogo';
import FiltroCategoria from './src/components/FiltroCategoria';
import CursoCard from './src/components/CursoCard';

export default function App() {
  // Estados principais: categoria selecionada e lista de IDs de cursos matriculados
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [idsMatriculados, setIdsMatriculados] = useState([]);

  // Alterna a matrícula de um curso (adiciona ou remove o ID da lista)
  const handleToggleMatricula = (idCurso) => {
    setIdsMatriculados((prevIds) =>
      prevIds.includes(idCurso)
        ? prevIds.filter((id) => id !== idCurso)
        : [...prevIds, idCurso]
    );
  };

  // Filtra os cursos conforme a categoria escolhida
  const cursosFiltrados =
    categoriaAtiva === 'Todos'
      ? LISTA_CURSOS
      : LISTA_CURSOS.filter((curso) => curso.categoria === categoriaAtiva);

  return (
    <View style={styles.tela}>
      <StatusBar style="light" />

      {/* Cabeçalho com contador de matrículas via Props */}
      <HeaderCatalogo
        titulo="Catálogo de Cursos"
        subtitulo="Escolha suas trilhas e garanta sua vaga"
        totalInscritos={idsMatriculados.length}
      />

      {/* Barra de filtros horizontal */}
      <FiltroCategoria
        categorias={CATEGORIAS}
        ativa={categoriaAtiva}
        aoSelecionar={setCategoriaAtiva}
      />

      {/* Lista de cursos filtrada */}
      <FlatList
        data={cursosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum curso encontrado para esta categoria.
          </Text>
        }
        renderItem={({ item }) => (
          <CursoCard
            curso={item}
            matriculado={idsMatriculados.includes(item.id)}
            onToggleMatricula={() => handleToggleMatricula(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  vazio: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 32,
    fontSize: 15,
  },
});




