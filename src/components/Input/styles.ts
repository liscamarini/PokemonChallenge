import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-top: 20px;
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  line-height: 21px;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
