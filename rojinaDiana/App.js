import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text>Lab1 useState{'\n'}</Text>
      <Text>{count}{'\n'}</Text>
      
      <View style = {styles.btnContainer}>
        <Button onPress={() => setCount(count + 1)} title="+1" color='rgb(0, 255, 0)' />
        <Button onPress={() => setCount(count - 1)} title="-1" color='rgb(255, 215, 0)' />
        <Button onPress={() => setCount(0)} title="restart" color='rgb(178, 34, 34)' />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
