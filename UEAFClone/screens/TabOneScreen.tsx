import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import { RootTabScreenProps } from '../types';
import ImagePath from '../Utility/ImagePath';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';
import { useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import PlayerListItem from '../components/PlayerListItem';
import { players } from '../assets/data/players';
import Filters from '../components/Filters';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const playersBottomSheetRef = useRef<BottomSheet>(null);
  const filtersBottomSheetRef = useRef<BottomSheet>(null);
  const ViewPlayers = () => {
    playersBottomSheetRef.current?.expand();
  };

  const snapPointsOne = useMemo(() => ['50%'], []);
  const snapPointstwo = useMemo(() => ['50%'], []);
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={ViewPlayers} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>View Players</Text>
      </Pressable>
      <BottomSheet
        ref={playersBottomSheetRef}
        index={-1}
        snapPoints={snapPointsOne}
        enablePanDownToClose
      >
        <View style={styles.contentContainer}>
          <Pressable
            onPress={() => filtersBottomSheetRef.current?.expand()}
            style={styles.filterContainer}
          >
            <Text style={styles.buttonText}>Filters</Text>
          </Pressable>
          <BottomSheetFlatList
            data={players}
            renderItem={({ item }) => <PlayerListItem players={item} />}
          />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={filtersBottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPointstwo}
      >
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6bc456',
  },
  buttonContainer: {
    backgroundColor: 'orange',
    width: '90%',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
  },
  filterContainer: {
    backgroundColor: 'orange',
    width: '90%',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
