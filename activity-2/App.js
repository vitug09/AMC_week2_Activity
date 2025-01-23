import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Jerron Vitug");
  const bodyText = 'My name is jerron jesse vitug 21 yrs old living in 196 gen evangelista st bagong barrio caloocan city single? hindi na eh taken na.';

  const onPressTitle = () => {
    setTitleText("Zesto Choco");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  titleText: { 
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;