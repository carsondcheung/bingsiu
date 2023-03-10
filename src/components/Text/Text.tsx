import React from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
  View,
} from 'react-native';
import styled from 'styled-components/native';

interface TextProps extends ReactNativeTextProps {
  color?: string;
  center?: boolean;
  fontSize?: 'header' | 'subHeader' | 'body1' | 'body2';
}

enum TextSize {
  header = '34px',
  subHeader = '28px',
  body1 = '14px',
  body2 = '12px',
}

const StyledText = styled(ReactNativeText)<TextProps>`
  color: ${props => (props.color ? props.color : 'black')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-size: ${props => (props.fontSize ? TextSize[props.fontSize] : '14px')};
`;

export function Text({
  children,
  ...rest
}: React.PropsWithChildren<TextProps>): JSX.Element {
  return (
    <View>
      <StyledText {...rest}>{children}</StyledText>
    </View>
  );
}
