import styled from 'styled-components/native';

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

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const ButtonBackText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  margin-left: 6px;
  margin-top: -5px;
  color: #ff9000;
`;

export const PokeDetailsContainer = styled.View`
  width: 100%;
  height: 540px;
  padding: 16px 32px 16px;
  margin-top: 10px;
  background: #3e3b47;
  border-radius: 8px;
`;

export const NumberText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #666360;
`;

export const PokeImage = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: -20px;
`;

export const PokemonNameText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #f99000;
`;

export const ContainerHWItem = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;
export const PokemonWeightText = styled.Text`
  width: 89px;
  height: 32px;
  font-family: 'Roboto-Regular';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #f4ede8;
`;

export const PokemonHeightText = styled.Text`
  width: 89px;
  height: 32px;
  font-family: 'Roboto-Regular';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #f4ede8;
`;

export const ContainerHW = styled.View`
  flex-direction: row;
`;
export const PokemonWeight = styled.Text`
  width: 70px;
  height: 21px;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 21px;
  color: #666360;
`;

export const PokemonHeight = styled.Text`
  width: 80px;
  height: 21px;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 21px;
  color: #666360;
  margin-bottom: 5px;
`;
export const ContainerStats = styled.View`
  flex-direction: row;
`;

export const PokemonStatsText = styled.Text`
  margin-top: 10px;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  margin-right: 10px;
  color: #f4ede8;
`;

export const PokemonStats = styled.Text`
  margin-top: 10px;
  font-family: 'Roboto-Medium';
  font-size: 16px;

  color: #f4ede8;
`;

export const ContainerProgressBar = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
`;

export const FamilyNumberText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #666360;
`;

export const PokemonFamilyText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 28px;
  color: #f4ede8;
  margin-top: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const PokemonFamily = styled.View`
  width: 340px;
  height: 300px;
  background: #3e3b47;
  border-radius: 8px;
  margin-top: 16px;
`;

export const PokeImageFamily = styled.Image`
  width: 180px;
  height: 180px;
`;

export const PokemonNameContainer = styled.View`
  align-items: center;
`;

export const PokemonName = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #f4ede8;
`;
