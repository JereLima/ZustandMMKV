import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useBearStore} from './src/store';
import logo from './src/assets/zustand_logo.png';

const App: React.FC = () => {
  const bearStore = useBearStore();
  const setBearStore = useBearStore().increase;
  const removeBearStore = useBearStore().decrease;

  return (
    <View style={css.container}>
      <Image source={logo} style={css.image} resizeMode="contain" />
      <Text style={css.title}>Zustand persist with MMKV</Text>
      <Text style={css.title}>Cliques Salvos {bearStore.bears}</Text>
      <View style={css.containerButtons}>
        <TouchableOpacity style={css.button} onPress={() => setBearStore(1)}>
          <Text style={css.textButton}>Aumenta um</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.button} onPress={() => removeBearStore(1)}>
          <Text style={css.textButton}>Diminui um</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerButtons: {
    marginTop: 22,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#45a',
  },
  textButton: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});
