import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {
  Container,
  ContainerPokemon,
  NumberText,
  PokeImage,
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

interface TypesPokemon {
  types: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<Pokemon> = ({
  pokemonId,
  pokeImg,
  name,
}: Pokemon) => {
  const [types, setTypes] = useState<TypesPokemon[]>([]);

  const loadTypes = useCallback(() => {
    api.get(`/pokemon/${types}/`).then(response => {
      setTypes(response.data.damage_relations);
    });
  }, [types]);

  console.log('type', types);

  useEffect(() => {
    loadTypes();
  }, [loadTypes]);

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

      <PokemonTextContainer>
        <PokemonTypes>Type: </PokemonTypes>
        <PokemonText>{types}</PokemonText>
      </PokemonTextContainer>
    </Container>
  );
};

export default PokemonCard;
