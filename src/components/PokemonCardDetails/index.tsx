/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {
  Container,
  PokemonEvolutionContainer,
  PokemonDetails,
  PokemonWeight,
  PokemonWeightText,
  PokemonHight,
  PokemonHightText,
  PokemonStats,
  Stats,
  HP,
  DEF,
  ATK,
  SPD,
  ContainerPokemon,
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
  types: string;
}

const PokemonCardDetails: React.FC<Pokemon> = ({
  pokemonId,
  pokeImg,
  name,
  ...rest
}) => {
  const [types, setTypes] = useState<Pokemon[]>([]);

  const loadTypes = useCallback(() => {
    api.get(`/pokemon/${pokemonId}/`).then(response => {
      setTypes(response.data.results);
    });
  }, [pokemonId]);

  console.log('type', types);

  useEffect(() => {
    loadTypes();
  }, [loadTypes]);

  return (
    <Container {...rest}>
      <PokemonEvolutionContainer>
        <ContainerPokemon>
          <NumberText>
            <Icon name="hash" size={24} color="#666360" />
            {pokemonId}
          </NumberText>
          <PokeImage source={{ uri: pokeImg }} />
        </ContainerPokemon>
        <PokemonName>{name}</PokemonName>

        <PokemonDetails>
          <PokemonWeight>KG</PokemonWeight>
          <PokemonWeightText>Weight</PokemonWeightText>
        </PokemonDetails>

        <PokemonDetails>
          <PokemonHight>M</PokemonHight>
          <PokemonHightText>Hight</PokemonHightText>
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

        <PokemonTextContainer>
          <PokemonTypes>Type: </PokemonTypes>
          <PokemonText>{types}</PokemonText>
        </PokemonTextContainer>
      </PokemonFamilyContainer>
    </Container>
  );
};

export default PokemonCardDetails;
