import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {
  Container,
  PokemonEvolutionContainer,
  PokemonDetails,
  PokemonDetailsWeight,
  PokemonWeight,
  PokemonWeightText,
  PokemonDetailsHight,
  PokemonHight,
  PokemonHightText,
  PokemonStats,
  Stats,
  HP,
  DEF,
  ATK,
  SPD,
  NumberText,
  PokeImage,
  PokemonFamilyContainer,
  PokemonTextContainer,
  PokemonTitle,
  PokemonName,
  PokemonTypes,
  PokemonText,
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
  const [types, setTypes] = useState<Pokemon[]>([]);

  return (
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

        <PokemonDetails>
          <PokemonDetailsWeight>
            <PokemonWeight>KG</PokemonWeight>
            <PokemonWeightText>Weight</PokemonWeightText>
          </PokemonDetailsWeight>

          <PokemonDetailsHight>
            <PokemonHight>M</PokemonHight>
            <PokemonHightText>Hight</PokemonHightText>
          </PokemonDetailsHight>
        </PokemonDetails>

        <PokemonStats>Stats</PokemonStats>
        <Stats>
          <HP>HP</HP>
          <ATK>ATK</ATK>
          <DEF>DEF</DEF>
          <SPD>SPD</SPD>
        </Stats>
      </PokemonEvolutionContainer>

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

        <PokemonTextContainer>
          <PokemonTypes>Type: </PokemonTypes>
          <PokemonText>{types}</PokemonText>
        </PokemonTextContainer>
      </PokemonFamilyContainer>
    </Container>
  );
};

export default PokemonCardDetails;
