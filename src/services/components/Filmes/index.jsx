import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [isModal, setIsModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa} />
        <View style={styles.areBtn}>
          <TouchableOpacity style={styles.btn} onPress={() => setIsModal(true)}>
            <Text style={styles.btnTexto}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" visible={isModal} transparent={true}>
        <Detalhes filme={data} voltar={() => setIsModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  areBtn: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  btn: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  btnTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});
