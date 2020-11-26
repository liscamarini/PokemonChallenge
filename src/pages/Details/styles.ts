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

  margin-top: 28px;
  margin-left: 10px;
`;

export const ButtonBackText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  margin-left: 6px;
  margin-top: -5px;
  color: #ff9000;
`;
