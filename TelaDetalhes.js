import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function TelaDetalhes({ route }) {
  const { titulo, imagem, descricao } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.fundoImagemGrande}>
        <Image source={{ uri: imagem }} style={styles.imagemGrande} resizeMode="contain" />
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  fundoImagemGrande: { backgroundColor: '#ADD8E6', padding: 30, borderRadius: 25, alignItems: 'center' },
  imagemGrande: { width: 280, height: 400, borderRadius: 15, margin: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#483D8B', textAlign: 'center', marginVertical: 10 },
  descricao: { fontSize: 16, textAlign: 'justify', color: '#333' },
});
