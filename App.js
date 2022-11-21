import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import api from './src/services/api';
import Filmes from './src/services/components/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    };

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          renderItem={({item}) => <Filmes data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
