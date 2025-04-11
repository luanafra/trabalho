import React from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet, Button } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Livros</Text>

        <Pressable onPress={() => navigation.navigate('Detalhes', {
          titulo: 'O Menino Que Tinha Sonhos Infinitos',
          imagem: 'https://m.media-amazon.com/images/I/61HeYdSFqTL._SL1200_.jpg',
          descricao: 'Vítor foi abandonado ainda bebê dentro de uma caixa de papelão tão frágil quanto ele, e cresceu num abrigo para menores. Seu maior sonho é ter uma família...'
        })}>
          <View style={styles.fundoImagem}>
            <Image source={{ uri: 'https://m.media-amazon.com/images/I/61HeYdSFqTL._SL1200_.jpg' }} style={styles.imagem} resizeMode="contain" />
          </View>
        </Pressable>
        <Text style={styles.tituloLivro}>O Menino Que Tinha Sonhos Infinitos</Text>

        <Pressable onPress={() => navigation.navigate('Detalhes', {
          titulo: 'As Coisas Que Você Só Vê Quando Desacelera',
          imagem: 'https://m.media-amazon.com/images/I/61F6T1at-nL._SY385_.jpg',
          descricao: 'De tempos em tempos, surge um livro que, com sua maneira original de iluminar importantes temas espirituais...'
        })}>
          <View style={styles.fundoImagem}>
            <Image source={{ uri: 'https://m.media-amazon.com/images/I/61F6T1at-nL._SY385_.jpg' }} style={styles.imagem} resizeMode="contain" />
          </View>
        </Pressable>
        <Text style={styles.tituloLivro}>As Coisas Que Você Só Vê Quando Desacelera</Text>

        <Button title="Home" onPress={() => navigation.navigate('Interacao')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, paddingBottom: 20 },
  container: { flex: 1, alignItems: 'center', padding: 10 },
  titulo: { fontSize: 25, color: '#483D8B', margin: 10, textAlign: 'center' },
  fundoImagem: { backgroundColor: '#ADD8E6', padding: 20, borderRadius: 20, alignItems: 'center' },
  imagem: { width: 180, height: 260, borderRadius: 10 },
  tituloLivro: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});
