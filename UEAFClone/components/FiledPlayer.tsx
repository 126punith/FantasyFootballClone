import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
interface FiledPlayerProps {
  position: string;
  player: string | null;
}
const FiledPlayer = ({ position, player }: FiledPlayerProps) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesome5
        name='tshirt'
        size={24}
        color={player ? '#d170db' : '#5c5c5cbb'}
      />
      <Text
        style={{
          backgroundColor: '#333333bb',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 12,
          padding: 2,
          paddingHorizontal: 7,
        }}
      >
        {position}
      </Text>
    </View>
  );
};

export default FiledPlayer;
