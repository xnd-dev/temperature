import React, { useState } from 'react';
import { Alert, Image, Keyboard, SafeAreaView, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from './assets/temp.png';

export default function TemperatureApp() {
  const [temp, setTemp] = useState('');
  const [convertedTemp, setConvertedTemp] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  function calculateTemp() {
    if (!temp || isNaN(parseFloat(temp))) {
      Alert.alert('Digite um valor válido de temperatura');
      return;
    }

    if (selectedScale === 'C') {
      const fahrenheit = `${(parseFloat(temp) * 1.8 + 32).toFixed(2)} Fahrenheit`;
      const kelvin = `${(parseFloat(temp) + 273).toFixed(2)} Kelvin`;
      setConvertedTemp(`${fahrenheit} | ${kelvin}`);
    } else if (selectedScale === 'F') {
      const celsius = `${((parseFloat(temp) - 32) / 1.8).toFixed(2)} Celsius`;
      const kelvin = `${((parseFloat(temp) - 32) * (5 / 9) + 273).toFixed(2)} Kelvin`;
      setConvertedTemp(`${celsius} | ${kelvin}`);
    } else if (selectedScale === 'K') {
      const celsius = `${(parseFloat(temp) - 273).toFixed(2)} Celsius`;
      const fahrenheit = `${((parseFloat(temp) - 273) * 1.8 + 32).toFixed(2)} Fahrenheit`;
      setConvertedTemp(`${celsius} | ${fahrenheit}`);
    }

    Keyboard.dismiss();
  }

  function setSelectedScaleAndClearInput(scale) {
    if (!temp || isNaN(parseFloat(temp))) {
      Alert.alert('Digite um valor válido de temperatura');
      return;
    }

    setSelectedScale(scale);
    setTemp('');

    if (scale === 'C') {
      const fahrenheit = `${(parseFloat(temp) * 1.8 + 32).toFixed(2)} Fahrenheit`;
      const kelvin = `${(parseFloat(temp) + 273).toFixed(2)} Kelvin`;
      setConvertedTemp(`${fahrenheit} | ${kelvin}`);
    } else if (scale === 'F') {
      const celsius = `${((parseFloat(temp) - 32) / 1.8).toFixed(2)} Celsius`;
      const kelvin = `${((parseFloat(temp) - 32) * (5 / 9) + 273).toFixed(2)} Kelvin`;
      setConvertedTemp(`${celsius} | ${kelvin}`);
    } else if (scale === 'K') {
      const celsius = `${(parseFloat(temp) - 273).toFixed(2)} Celsius`;
      const fahrenheit = `${((parseFloat(temp) - 273) * 1.8 + 32).toFixed(2)} Fahrenheit`;
      setConvertedTemp(`${celsius} | ${fahrenheit}`);
    }

    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="blue" />

      <Text style={styles.title}>Conversor de Temperatura</Text>

      <Text style={styles.text}>
        Valor da temperatura que deseja converter:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Valor da temperatura atual na escala selecionada"
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={temp}
        onChangeText={(number) => setTemp(number)}
      />

      <Image style={styles.image} source={Icon} alt="Imagem do icone" />

      {convertedTemp !== '' && (
        <View>
          <Text style={styles.text}>{convertedTemp}</Text>
        </View>
      )}

      <View style={styles.toggleGroup}>
        <TouchableOpacity
          style={[styles.button, selectedScale === 'C' && styles.selectedButton]}
          onPress={() => setSelectedScaleAndClearInput('C')}
        >
          <Text style={styles.buttonText}>Celsius</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedScale === 'F' && styles.selectedButton]}
          onPress={() => setSelectedScaleAndClearInput('F')}
        >
          <Text style={styles.buttonText}>Fahrenheit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedScale === 'K' && styles.selectedButton]}
          onPress={() => setSelectedScaleAndClearInput('K')}
        >
          <Text style={styles.buttonText}>Kelvin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    width: '50%',
    height: '30%',
    marginVertical: 16,
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 32,
  },

  input: {
    width: '90%',
    height: 50,
    color: 'green',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 64,
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
  },

  selectedButton: {
    backgroundColor: '#82C36D',
    borderColor: '#82C36D',
  },

  toggleGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    width: '100%',
    height: 64,
    gap: 8,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    width: '90%',
    textAlign: 'left',
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 12,
  },
});
