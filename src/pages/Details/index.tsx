/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-const */
import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, ScrollView, View } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

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
  PokeDetailsContainer,
  PokemonFamilyText,
  NumberText,
  PokeImage,
  PokemonNameContainer,
  PokemonNameText,
  ContainerHWItem,
  ContainerHW,
  PokemonHeight,
  PokemonHeightText,
  PokemonWeight,
  PokemonWeightText,
  PokemonStats,
  PokemonFamily,
  PokemonStatsText,
  ContainerStats,
  ContainerProgressBar,
} from './styles';
import { ContainerPokemon } from '../Home/styles';

export interface Pokemon {
  name: string;
}

interface PokemonDetails {
  name: string;
  pokemonId: number;
  pokeImg: string;
  height: number;
  weight: number;
  stats: number;
}

interface PokemonStats {
  base: number;
  name: string;
}

const Details: React.FC<Pokemon> = () => {
  const navigation = useNavigation();
  const route = useRoute<Pokemon | any>();

  const pokemonId = route.params.pokeId;

  const [pokeFamily, setPokeFamily] = useState<Pokemon[] | any>([]);
  const [pokeDetails, setPokeDetails] = useState<PokemonDetails[] | any>([]);
  const [stats, setStats] = useState<PokemonStats[]>([]);

  const loadDetail = useCallback(() => {
    api
      .get(`pokemon-species/${pokemonId}`)
      .then(async response => {
        const evolutionChainUrl = response.data.evolution_chain.url;

        const resultChain = await api.get(evolutionChainUrl);
        let pokeEvolutionList = [];

        const evolutionData = resultChain.data.chain;

        const evolvesTo = evolutionData.evolves_to;

        if (evolutionData) {
          const resultSplit = evolutionData.species.url;
          const pokeId = resultSplit.split('/')[
            resultSplit.split('/').length - 2
          ];
          pokeEvolutionList.push({
            name: evolutionData.species.name.toUpperCase(),
            pokemonId: pokeId,
            pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`,
          });

          if (evolvesTo[0]) {
            const resultSplit1 = evolvesTo[0].species.url;
            const pokeIdV1 = resultSplit1.split('/')[
              resultSplit1.split('/').length - 2
            ];

            pokeEvolutionList.push({
              name: evolvesTo[0].species.name.toUpperCase(),
              pokemonId: pokeIdV1,
              pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${pokeIdV1}.png`,
            });

            if (evolvesTo[0].evolves_to[0]) {
              const resultSplit2 = evolvesTo[0].evolves_to[0].species.url;
              const pokeIdEv2 = resultSplit2.split('/')[
                resultSplit2.split('/').length - 2
              ];
              pokeEvolutionList.push({
                name: evolvesTo[0].evolves_to[0].species.name.toUpperCase(),
                pokemonId: pokeIdEv2,
                pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${pokeIdEv2}.png`,
              });
            }
          }
        }

        setPokeFamily(pokeEvolutionList);
      })
      .catch(err => {
        Alert.alert(`erro${err}`);
      });
  }, [pokemonId]);

  const loadPokemonDetails = useCallback(async () => {
    await api
      .get(`pokemon/${pokemonId}`)
      .then(response => {
        setPokeDetails(response.data.abilities);

        const pokemonList = [
          {
            name: response.data.name.toUpperCase(),
            pokemonId: response.data.id,
            pokeImg: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
            height: response.data.height,
            weight: response.data.weight,
          },
        ];

        const pokeStats = response.data.stats;
        if (pokeStats) {
          const pokeList = pokeStats.map((stat: any) => ({
            base: stat.base_stat,
            name: stat.stat.name.toUpperCase(),
          }));

          setStats(pokeList);
        }

        setPokeDetails(pokemonList);
      })
      .catch(() => setPokeDetails([]));
  }, [pokemonId]);

  useEffect(() => {
    loadDetail();
    loadPokemonDetails();
  }, [loadDetail, loadPokemonDetails]);

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

      <ScrollView>
        {pokeDetails.map((item: any) => (
          <View style={{ alignItems: 'center' }}>
            <PokeDetailsContainer>
              <NumberText>
                <Icon name="hash" size={24} color="#666360" />
                {item.pokemonId}
              </NumberText>

              <View style={{ alignItems: 'center' }}>
                <PokeImage source={{ uri: item.pokeImg }} />

                <PokemonNameText>{item.name}</PokemonNameText>

                <ContainerHWItem>
                  <PokemonWeightText>{item.weight} KG</PokemonWeightText>
                  <PokemonHeightText>{item.height} M</PokemonHeightText>
                </ContainerHWItem>

                <ContainerHW>
                  <PokemonHeight>Height</PokemonHeight>
                  <PokemonWeight>Weight</PokemonWeight>
                </ContainerHW>
              </View>

              {stats.map(stat => (
                <ContainerStats>
                  <PokemonStatsText>{stat.name}</PokemonStatsText>
                  <PokemonStats>{stat.base}</PokemonStats>
                  <ContainerProgressBar>
                    <ProgressBar
                      styleAttr="Horizontal"
                      color="#ff9900"
                      width={180}
                      height={20}
                      borderRadius={10}
                      borderWidth={10}
                      indeterminate={false}
                      progress={0.45}
                    />
                  </ContainerProgressBar>
                </ContainerStats>
              ))}
            </PokeDetailsContainer>
          </View>
        ))}

        <PokemonFamilyText>Family Tree</PokemonFamilyText>
        {pokeFamily.map((poke: any) => (
          <View style={{ alignItems: 'center' }}>
            <PokemonFamily>
              <ContainerPokemon>
                <NumberText>
                  <Icon name="hash" size={24} color="#666360" />
                  {poke.pokemonId}
                </NumberText>
                <View style={{ marginTop: 30 }}>
                  <PokeImage source={{ uri: poke.pokeImg }} />
                </View>
              </ContainerPokemon>

              <PokemonNameContainer>
                <PokemonNameText>{poke.name}</PokemonNameText>
              </PokemonNameContainer>
            </PokemonFamily>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Details;
