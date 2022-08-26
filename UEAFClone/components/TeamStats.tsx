import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.valueConatiner}>
        <Text style={styles.label}>Players </Text>
        <Text style={styles.value}>0 /15 </Text>
      </View>

      <View style={styles.valueConatiner}>
        <Text style={styles.label}>Remaining </Text>
        <Text style={styles.value}>€100 </Text>
      </View>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#3b93b3',
  },
  valueConatiner: {
    marginRight: 25,
  },
  label: {
    color: '#333',
  },
  value: {},
});
