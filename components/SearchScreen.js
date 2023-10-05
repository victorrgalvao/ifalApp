import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/styles';

const SearchScreen = () => {
  const [animeName, setAnimeName] = useState('');
  const [animes, setAnimes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [valorBotao, setValorBotao] = useState([]);

  useEffect(() => {
    const initButtonStates = animes.map(() => 'Favoritar');
    setValorBotao(initButtonStates);
  }, [animes]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&sfw`);
      const data = await response.json();
      setAnimes(data.data || []);
    } catch (error) {
      console.error(error);
    }
    setShowFavorites(false);
    setAnimeName('');
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleFavorite = (id, title, imageUrl, index) => {
    const existingIndex = favorites.findIndex((favorite) => favorite.id === id);

    if (existingIndex === -1) {
      const favoriteMovie = {
        id: id,
        nomeFilme: title,
        image: imageUrl,
      };
      setFavorites([...favorites, favoriteMovie]);
      const updatedButtonStates = [...valorBotao];
      updatedButtonStates[index] = 'Remover';
      setValorBotao(updatedButtonStates);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(existingIndex, 1);
      setFavorites(updatedFavorites);
      const updatedButtonStates = [...valorBotao];
      updatedButtonStates[index] = 'Favoritar';
      setValorBotao(updatedButtonStates);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.animeCard}>
      <Image source={{ uri: item.images.jpg.image_url }} style={styles.animeImage} />
      <Text>{item.title}</Text>
      <TouchableOpacity
        style={[
          styles.button1,
          valorBotao[index] === 'Favoritar'
            ? { backgroundColor: 'yellow' }
            : { backgroundColor: 'red' },
        ]}
        onPress={() => handleFavorite(item.mal_id, item.title, item.images.jpg.image_url, index)}
      >
        <Text>{valorBotao[index]}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Nome:</Text>
        <TextInput
          placeholder="Digite o nome do anime"
          value={animeName}
          onChangeText={setAnimeName}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleShowFavorites}>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Mostrar Favoritos</Text>
        </TouchableOpacity>
      </View>

      {showFavorites ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.animeCard}>
              <Image source={{ uri: item.image }} style={styles.animeImage} />
              <Text>{item.nomeFilme}</Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: 'red' }]}
                onPress={() => handleFavorite(item.id, item.nomeFilme, item.image)}
              >
                <Text>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <FlatList
          data={animes}
          renderItem={renderItem}
          keyExtractor={(item) => item.mal_id.toString()}
        />
      )}
    </View>
  );
};

export default SearchScreen;
