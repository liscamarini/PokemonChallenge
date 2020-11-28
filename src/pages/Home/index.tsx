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
  pokeImg: string;
}

const Home: React.FC<Pokemon> = () => {
  const navigation = useNavigation();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [searchPokemon, setSearchPokemon] = useState('');

  const loadPokemon = useCallback(() => {
    api
      .get(`pokemon/${searchPokemon}`)
      .then(response => {
        setPokemons(response.data.results);
        // if (response.data.result) {
        //   setPokemons(
        //     response.data.results.map(item => {
        //       return (
        //         item.pokemonId,
        //         item.name,
        //         item.pokeImg
        //       ),
        //     })

        //   return;
        // }

        // setPokemons([
        //   {
        //     name: 'bulbasaur',
        //     pokeImg: 'https://pokeapi.co/api/v2/pokemon/idPokemon/',
        //     pokemonId: 11,
        //   },
        // ]);

        console.log(response.data);
      })
      .catch(() => {
        setPokemons([]);
      });
  }, [searchPokemon]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  // console.log('pokemon', pokemons);

  const navigateToDetails = useCallback(
    pokeId => {
      const { pokemonId } = pokeId;
      navigation.navigate('Details', { pokeId: pokemonId });
    },
    [navigation],
  );

  const renderItemPokemon = useCallback(
    ({ item }) => {
      const { url, name } = item;
      const pokeId = url.split('/')[url.split('/').length - 2];
      const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

      return (
        <PokemonListContainer onPress={() => navigateToDetails(pokeId)}>
          <PokemonCard pokemonId={pokeId} pokeImg={imageUrl} name={name} />
        </PokemonListContainer>
      );
    },
    [navigateToDetails],
  );

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
        refreshing
        renderItem={renderItemPokemon}
        keyExtractor={(item: Pokemon) => item.name}
      />
    </Container>
  );
};

export default Home;
