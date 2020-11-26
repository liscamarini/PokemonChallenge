/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/jsx-props-no-spreading
import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, value = ' ', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#f99000' : '#666360'}
      />
      <TextInput
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
};

export default Input;
