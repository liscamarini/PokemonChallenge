import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const ContainerPokemon = styled.View`
  flex-direction: row;
  margin-right: 16px;
`;

export const NumberText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #666360;
  margin-top: 16px;
  margin-right: 26px;
`;
export const PokeImage = styled.Image`
  position: relative;
  width: 180px;
  height: 180px;
`;
export const PokemonTextContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const PokemonTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #f4ede8;
  margin-right: 10px;
  margin-left: 10px;
`;
export const PokemonName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #f99000;
`;

export const PokemonTypes = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #f4ede8;
`;
export const PokemonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #f99000;
`;
