import React from 'react';
import {ButtonProps, Button as ReactNativeButton, View} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(ReactNativeButton)`
  padding: 10px;
  border: solid 2px;
  border-radius: 16px;
  border-color: violet;
`;

export function Button({
  ...rest
}: React.PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <View>
      <StyledButton title={rest.title} onPress={rest.onPress} />
    </View>
  );
}
