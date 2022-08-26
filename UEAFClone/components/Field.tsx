import { View, ImageBackground } from 'react-native';
import React from 'react';
import ImagePath from '../Utility/ImagePath';
import FiledPlayer from './FiledPlayer';

let players: { [key: string]: null[] | string[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GCK: [null],
};

const Field = () => {
  return (
    <ImageBackground
      source={ImagePath.FOOTBALL}
      style={{
        width: '100%',
        aspectRatio: 2 / 3,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      resizeMode={'contain'}
    >
      {Object.keys(players).map((position, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          {players[position].map((player) => (
            <FiledPlayer position={position} player={player} />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
