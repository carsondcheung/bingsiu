import React from 'react';
import {
  TextInput as ReactNativeTextInput,
  TextInputProps as ReactNativeTextInputProps,
  View,
} from 'react-native';
import styled from 'styled-components/native';

interface TextInputProps extends ReactNativeTextInputProps {
  errorMessage?: string;
  renderErrorMessage?: boolean;
}

const StyledTextInput = styled(ReactNativeTextInput)`
  padding: 10px;
  border: solid 2px;
  border-radius: 16px;
  border-color: violet;
`;

export function TextInput({
  ...rest
}: React.PropsWithChildren<TextInputProps>): JSX.Element {
  return (
    <View>
      <StyledTextInput {...rest} />
    </View>
  );
}
