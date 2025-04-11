import React, { useState } from 'react';
import {View,Text,TextInput,Button,StyleSheet,ScrollView,Image,Switch,TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function InteracaoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [livroFavorito, setLivroFavorito] = useState('');
  const [comentario, setComentario] = useState('');

  const [genero, setGenero] = useState('Ficção');
  const [avaliacao, setAvaliacao] = useState('5');

  const [nota1, setNota1] = useState(5);
  const [nota2, setNota2] = useState(7);

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  const [mensagem, setMensagem] = useState('');
  const livros = ['1984', 'Dom Casmurro', 'Harry Potter', 'O Hobbit'];

  const livrosInfo = [
    {
      img: 'https://m.media-amazon.com/images/I/61HeYdSFqTL._SL1200_.jpg',
      desc: 'Um livro emocionante sobre superação e busca por um lar. A narrativa envolve o leitor em cada capítulo, com uma história profunda e cheia de significado humano.'
    },
    {
      img: 'https://m.media-amazon.com/images/I/61F6T1at-nL._SY385_.jpg',
      desc: 'Este livro é uma reflexão sobre o ritmo acelerado da vida moderna e nos convida a encontrar paz através da desaceleração e da atenção plena. Uma leitura leve e necessária.'
    },
    {
      img: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._SL1500_.jpg',
      desc: 'Com uma trama envolvente, o livro mistura mistério e romance. Os personagens são bem construídos e o final é surpreendente, deixando o leitor pensativo por dias.'
    },
    {
      img: 'https://m.media-amazon.com/images/I/81dQwQlmAXL.jpg',
      desc: 'Uma jornada mágica repleta de aventuras e descobertas. Perfeito para quem ama mundos fantasiosos e personagens cativantes. Um clássico moderno da literatura infantojuvenil.'
    },
    {
      img: 'https://m.media-amazon.com/images/I/81gepf1eMqL.jpg',
      desc: 'Este livro nos mostra como atitudes simples podem transformar nossa vida e a dos outros. Inspirador, com lições importantes sobre empatia, gentileza e convivência.'
    }
  ];

  function enviar() {
    setMensagem(`Obrigado, ${nome || 'leitor'}! Sua opinião foi registrada.`);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.titulo}>📚 mande seu FeedBack</Text>

      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Livro Favorito" value={livroFavorito} onChangeText={setLivroFavorito} />
      <TextInput style={styles.input} placeholder="Comentário" value={comentario} onChangeText={setComentario} multiline />

      {/* Pickers */}
      <Text style={styles.label}>Gênero:</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={genero} onValueChange={setGenero}>
          <Picker.Item label="Ficção" value="Ficção" />
          <Picker.Item label="Romance" value="Romance" />
          <Picker.Item label="Terror" value="Terror" />
        </Picker>
      </View>

      <Text style={styles.label}>Avaliação Geral:</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={avaliacao} onValueChange={setAvaliacao}>
          {[...Array(10)].map((_, i) => (
            <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
          ))}
        </Picker>
      </View>

      {/* Sliders */}
      <Text style={styles.label}>Nota para Livro 1: {nota1}</Text>
      <Slider minimumValue={0} maximumValue={10} step={1} value={nota1} onValueChange={setNota1} minimumTrackTintColor="#483D8B" />

      <Text style={styles.label}>Nota para Livro 2: {nota2}</Text>
      <Slider minimumValue={0} maximumValue={10} step={1} value={nota2} onValueChange={setNota2} minimumTrackTintColor="#483D8B" />

      {/* Switches */}
      <View style={styles.switchRow}>
        <Text style={styles.label}>Lido recentemente?</Text>
        <Switch value={switch1} onValueChange={setSwitch1} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.label}>Deseja receber recomendações?</Text>
        <Switch value={switch2} onValueChange={setSwitch2} />
      </View>

      {/* Botões */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.botao} onPress={enviar}>
          <Text style={styles.btnTexto}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#ccc' }]} onPress={() => {
          setNome(''); setEmail(''); setLivroFavorito(''); setComentario('');
        }}>
          <Text style={[styles.btnTexto, { color: '#000' }]}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

      {/* Lista */}
      <Text style={styles.subtitulo}>Sugestões de Leitura:</Text>
      {livros.map((livro, i) => (
        <Text key={i} style={styles.itemLista}>📖 {livro}</Text>
      ))}

      {/* Imagens com botão de detalhes */}
      <Text style={styles.subtitulo}>Livros em Destaque:</Text>
      {livrosInfo.map((livro, i) => (
        <View key={i} style={styles.card}>
          <Image style={styles.img} source={{ uri: livro.img }} />
          <Text style={styles.desc}>{livro.desc}</Text>
          <TouchableOpacity
            style={styles.leiaMaisBtn}
            onPress={() =>
              navigation.navigate('DetalhesLivro', {
                titulo: `Livro ${i + 1}`,
                imagem: livro.img,
                descricao: livro.desc,
              })
            }
          >
            <Text style={styles.leiaMaisTexto}>📖 Leia mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#483D8B', marginBottom: 20, textAlign: 'center' },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 10 },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginVertical: 5, borderWidth: 1, borderColor: '#ccc' },
  label: { marginTop: 10, fontWeight: 'bold' },
  pickerBox: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff', marginBottom: 10 },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 },
  btnContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  botao: { backgroundColor: '#483D8B', padding: 12, borderRadius: 8, flex: 1, marginHorizontal: 5 },
  btnTexto: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  mensagem: { marginTop: 15, fontSize: 16, fontStyle: 'italic', color: 'green', textAlign: 'center' },
  itemLista: { paddingVertical: 5 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  img: { width: '100%', height: 200, borderRadius: 10 },
  desc: { marginTop: 10, fontSize: 14, textAlign: 'justify' },
  leiaMaisBtn: { marginTop: 10, padding: 10, backgroundColor: '#4B3DBB', borderRadius: 8 },
  leiaMaisTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
