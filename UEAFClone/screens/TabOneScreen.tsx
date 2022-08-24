import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

import { RootTabScreenProps } from '../types';
import ImagePath from '../Utility/ImagePath';
import { FontAwesome5 } from '@expo/vector-icons';

let players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GCK: [null],
};

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <>
      <SafeAreaView style={styles.container}>
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
              {players[position].map((player, index) => (
                <View key={index}>
                  <FontAwesome5
                    name='tshirt'
                    size={24}
                    color={player ? '#d170db' : '#5c5c5cbb'}
                  />
                  <Text>player</Text>
                </View>
              ))}
            </View>
          ))}
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
