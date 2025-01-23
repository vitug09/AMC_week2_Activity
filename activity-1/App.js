import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
     <View 
     style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> </Text>
      
        <Text> kay ange lang haharot </Text>
        <Image
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{ textAlign: 'center',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="IT 302"
      />
    </ScrollView>
  );
};

export default App;