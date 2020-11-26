import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import {
  Container,
  Header,
  LogoImg,
  Title,
  ButtonBack,
  ButtonBackText,
} from './styles';

export interface Pokemon {
  pokemonId: number;
  name: string;
  img: string;
}

interface RouteParams {
  pokeIndex: number;
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  const [pokeEvolution, setPokeEvolution] = useState<Pokemon[]>([]);

  const loadDetail = useCallback(() => {
    api.get(`pokemon/${routeParams}/`).then(response => {
      const pokemon = response.data.forms
        .map((item: { name: string }) => item.name)
        .toString();
      setPokeEvolution(pokemon);
    });
  }, [routeParams]);

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  return (
    <Container>
      <Header>
        <LogoImg source={logoImg} />
        <Title>POKÉMON CHALLENGE</Title>
      </Header>

      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#ff9000" />
        <ButtonBackText>Back</ButtonBackText>
      </ButtonBack>
    </Container>
  );
};

export default Details;
