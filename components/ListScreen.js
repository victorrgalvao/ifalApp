import React from 'react';
import { View, FlatList, StyleSheet,SafeAreaView ,Image} from 'react-native';
import { List } from 'react-native-paper';
import gruposKPop from '../data/gruposData'


const separatorComponent = () => {
  return <View style={{ height: 1, backgroundColor: 'gray' }} />;
};



// Tela de listagem a ser retornada para o app.js
const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={gruposKPop}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={separatorComponent} // Adicione esta linha para o separador
        renderItem={({ item }) => (
          <List.Item
        title={item.nome}
       
        description={item.grupo}
        left={(props) => (
          <List.Icon {...props} icon={() => <Image source={{ uri: item.imagem }} style={{ width: 60, height: 60, borderRadius: 20 }} />} />
        )}
        onPress={() => {
          // Lógica quando o item é pressionado
        }}
      />
        )}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor:'#A5D1E6'
  },
  item: {
    marginBottom: 10,
  },
});


export default ListScreen;