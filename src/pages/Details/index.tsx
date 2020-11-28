import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import PokemonCardDetails from '../../components/PokemonCardDetails';
import api from '../../services/api';

import {
  Container,
  Header,
  LogoImg,
  Title,
  ButtonBack,
  ButtonBackText,
  DetailsList,
} from './styles';

export interface Pokemon {
  pokemonId: number;
  name: string;
  pokeImg: string;
}

const Details: React.FC<Pokemon> = ({ pokemonId }: Pokemon) => {
  const navigation = useNavigation();

  const [pokeEvolution, setPokeEvolution] = useState<Pokemon[]>([]);

  const loadDetail = useCallback(() => {
    api
      .get(`pokemon/${pokeEvolution}/`)
      .then(response => {
        setPokeEvolution(response.data.results);
      })
      .catch(error => {
        Alert.alert('Error', `${error}`);
      });
  }, [pokeEvolution]);

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  const renderItemDetails = useCallback(({ item }) => {
    const { url } = item;
    const pokeIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeIndex}.png`;

    return (
      <PokemonCardDetails
        pokemonId={pokeIndex}
        pokeImg={imageUrl}
        name={item.name}
      />
    );
  }, []);

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

      <DetailsList
        data={pokeEvolution}
        renderItem={renderItemDetails}
        keyExtractor={(item: Pokemon) => item.name}
      />
    </Container>
  );
};

export default Details;
