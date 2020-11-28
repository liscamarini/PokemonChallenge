import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  PokemonEvolutionContainer,
  NumberText,
  PokeImage,
  PokemonFamilyContainer,
  PokemonTextContainer,
  PokemonTitle,
  PokemonName,
} from './styles';

interface Pokemon {
  pokemonId: number;
  name: string;
  pokeImg: string;
}

const PokemonCardDetails: React.FC<Pokemon> = ({
  pokemonId,
  pokeImg,
  name,
}: Pokemon) => {
  return (
    <>
      <Container>
        <PokemonEvolutionContainer>
          <View style={{ flexDirection: 'row' }}>
            <NumberText>
              <Icon name="hash" size={24} color="#666360" />
              {pokemonId}
            </NumberText>

            <PokeImage source={{ uri: pokeImg }} />
          </View>
          <PokemonName>{name}</PokemonName>

          <PokemonFamilyContainer>
            <NumberText>
              <Icon name="hash" size={24} color="#666360" />
              {pokemonId}
            </NumberText>
            <PokeImage source={{ uri: pokeImg }} />

            <PokemonTextContainer>
              <PokemonTitle>Name: </PokemonTitle>
              <PokemonName>{name}</PokemonName>
            </PokemonTextContainer>
          </PokemonFamilyContainer>
        </PokemonEvolutionContainer>
      </Container>
    </>
  );
};

export default PokemonCardDetails;
