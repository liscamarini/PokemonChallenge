/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  LogoImg,
  Title,
  PokemonList,
  PokemonListContainer,
} from './styles';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import PokemonCard from '../../components/PokemonCard';

import api from '../../services/api';

export interface Pokemon {
  pokemonId: number;
  name: string;
  img: string;
}

// eslint-disable-next-line prefer-const
let pokemonIndex = 1;

const Home: React.FC<Pokemon> = () => {
  const navigation  = useNavigation();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [searchPokemon, setSearchPokemon] = useState('');

  const loadPokemon = useCallback(() => {
    api
      .get(`/pokemon/${searchPokemon}/`)
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        Alert.alert('Error', `${error}`);
      });
  }, [searchPokemon]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  // console.log('pokemon', pokemons);

  const navigateToDetails = useCallback((pokemonId) => {
    const { pokeIndex } = pokemonId;
    navigation.navigate('Details', {pokemonId: pokeIndex});
    },
    [navigation]
  );

  const renderItem = useCallback(({ item }) => {
    const { url } = item;
    const pokeIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeIndex}.png`;

    return (
      <PokemonListContainer onPress={() => navigateToDetails(pokeIndex)}>
        <PokemonCard pokemonId={pokeIndex} pokeImg={imageUrl} name={item.name} types={item.types} />
      </PokemonListContainer>
    );
  }, [navigateToDetails]);

  return (
    <Container>
      <Header>
        <LogoImg source={logoImg} />
        <Title>POKÉMON CHALLENGE</Title>
      </Header>

      <Input
        value={searchPokemon}
        icon="search"
        onChangeText={value => setSearchPokemon(value)}
        placeholder="Type the Pokémon name"
      />

      <PokemonList
        data={pokemons}
        extraData={pokemonIndex}
        refreshing
        renderItem={renderItem}
        keyExtractor={(item: Pokemon) => item.name}
      />
    </Container>
  );
};

export default Home;
