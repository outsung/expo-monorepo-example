import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export const Paragraph = ({ children, style, ...props }: TextProps) => (
  <Text {...props} style={[$paragraph, style]}>
    {children}
  </Text>
);

const { $paragraph } = StyleSheet.create({
  $paragraph: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    letterSpacing: 0.25,
    lineHeight: 20,
    marginVertical: 2,
  },
});
