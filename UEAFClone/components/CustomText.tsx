import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ ...props }: any) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: `SpaceMono-${props.textType}`,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
