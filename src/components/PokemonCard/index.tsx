import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerPokemon,
  NumberText,
  PokeImage,
  PokemonTextContainer,
  PokemonTitle,
  PokemonName,
} from './styles';

interface Pokemon {
  pokemonId: number;
  name: string;
  pokeImg: string;
}

const PokemonCard: React.FC<Pokemon> = ({
  pokemonId,
  pokeImg,
  name,
}: Pokemon) => {
  return (
    <Container>
      <ContainerPokemon>
        <NumberText>
          <Icon name="hash" size={24} color="#666360" />
          {pokemonId}
        </NumberText>
        <PokeImage source={{ uri: pokeImg }} />
      </ContainerPokemon>

      <PokemonTextContainer>
        <PokemonTitle>Name: </PokemonTitle>
        <PokemonName>{name}</PokemonName>
      </PokemonTextContainer>
    </Container>
  );
};

export default PokemonCard;
