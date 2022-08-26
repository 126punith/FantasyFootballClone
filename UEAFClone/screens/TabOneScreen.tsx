import { StyleSheet, View, SafeAreaView, Text, Pressable } from 'react-native';
import { RootTabScreenProps } from '../types';
import ImagePath from '../Utility/ImagePath';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';
import { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const playersBottomSheetRef = useRef<BottomSheet>(null);
  const ViewPlayers = () => {
    playersBottomSheetRef.current?.expand();
  };

  const snapPoints = useMemo(() => ['25%', '50%'], []);
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
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
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
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
