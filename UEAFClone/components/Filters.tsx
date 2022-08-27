import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Filters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>FWD</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>MID</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>DEF</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>GCK</Text>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterContainer: {
    borderRadius: 25,
    backgroundColor: '#ddd',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
