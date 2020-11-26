import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { Pokemon } from '.';

export const Container = styled.View`
  flex: 1;
  background: #312e38;
`;
export const Header = styled.View`
  padding: 24px;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.Image`
  position: relative;
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  color: #e3dada;
  font-size: 26px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
  margin-left: 16px;
`;

export const PokemonList = styled(FlatList as new () => FlatList<Pokemon>)`
  padding: 10px 20px 10px;
`;
export const PokemonListContainer = styled.TouchableOpacity`
  width: 100%;
  height: 300px;
  margin-right: 16px;
  background: #3e3b47;
  border-radius: 8px;
  margin-top: 16px;
`;
