import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Detalhes({filme, voltar}) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.desc}>{filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '95%',
    height: '60%',
    backgroundColor: '#131313',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#e52625',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  desc: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
});
