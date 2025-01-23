import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Jerron
        <Text style={styles.innerText}> Vitug</Text>
      </Text>
      <Text> I am 
      <Text style={{color: 'green'}}> BSIT</Text>
      </Text>
      <Text> nakatira
      <Text style={{color: 'orange'}}> sa bagong barrio</Text>
      </Text>
      <Text> Favorite 
      <Text style={{color: 'black'}}> color black</Text>
      </Text>
      <Text> crush
      <Text style={{color: 'blue'}}> ange</Text>
      </Text>
      <Text> edad
      <Text style={{color: 'pink'}}> 19</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;