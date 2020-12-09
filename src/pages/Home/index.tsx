import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  LogoImg,
  Title,
  PokemonList,
  PokemonListContainer,
  ContainerPokemon,
  NumberText,
  PokeImage,
  PokemonName,
  PokemonNameContainer,
  PokemonNameText,
} from './styles';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';

import api from '../../services/api';

export interface Pokemon {
  pokeId: number;
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
        const pokeData = response.data.results;
        if (pokeData) {
          const pokemonList = pokeData.map((poke: any, id: number) => ({
            name: poke.name,
            pokeId: id + 1,
            pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${
              id + 1
            }.png`,
          }));

          setPokemons(pokemonList);
        } else {
          const pokeFakeList = [
            {
              name: response.data.name,
              pokeId: response.data.id,
              pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
            },
          ];

          setPokemons(pokeFakeList);
        }
      })
      .catch(() => {
        setPokemons([]);
      });
  }, [searchPokemon]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  const navigateToDetails = useCallback(
    pokeId => {
      navigation.navigate('Details', { pokeId });
    },
    [navigation],
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
        keyExtractor={pokemon => pokemon.name}
        renderItem={({ item: pokemon }) => (
          <PokemonListContainer
            onPress={() => navigateToDetails(pokemon.pokeId)}
          >
            <ContainerPokemon>
              <NumberText>
                <Icon name="hash" size={24} color="#666360" />
                {pokemon.pokeId}
              </NumberText>
              <PokeImage source={{ uri: pokemon.pokeImg }} />
            </ContainerPokemon>

            <PokemonNameContainer>
              <PokemonName>Name: </PokemonName>
              <PokemonNameText>{pokemon.name}</PokemonNameText>
            </PokemonNameContainer>
          </PokemonListContainer>
        )}
      />
    </Container>
  );
};

export default Home;
