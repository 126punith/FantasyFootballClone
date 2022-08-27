import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Player } from '../types';

interface Props {
  players: Player;
}

const PlayerListItem = ({ players, ...rest }: Props) => {
  console.log(players);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://source.unsplash.com/random/300x200?sig=${
            Math.random() * 100000000
          }`,
        }}
        style={styles.image}
      />
      <View
        style={{
          flexGrow: 1,
        }}
      >
        <Text style={styles.name}>{players.name}</Text>
        <Text>{players.match}</Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.name}>
          €{(players.price / 1_000_000).toFixed(2)} m
        </Text>
        <Text>{players.position}</Text>
      </View>
      <Text style={styles.points}>{players.totalPoints}</Text>
    </View>
  );
};

export default PlayerListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    // paddingHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  name: {
    fontWeight: 'bold',
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
