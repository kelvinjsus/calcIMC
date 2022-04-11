import React from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';

import styles from './style.js';

export default function app() {
  let [peso, onChangePeso] = React.useState(null);
  let [altura, onChangeAltura] = React.useState(null);
  let imc = 0;
  let text = "";

  if (peso != null && altura != null) {
    peso = peso.toString().replace(",", ".");
    altura = altura.toString().replace(",", ".");
    imc = peso / (altura * altura);

    if (imc <= 18.5) {
      text = "Abaixo do peso";
    } else if (imc > 18.5 && imc <= 25) {
      text = "Peso normal";
    } else if (imc > 25 && imc <= 30) {
      text = "Acima do peso";
    } else if (imc > 30) {
      text = "Obesidade";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora IMC
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePeso}
        value={peso}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeAltura}
        value={altura}
        placeholder="Altura (m)"
        keyboardType="numeric"
      />
      <Text style={styles.result}>
        IMC: {imc.toFixed(1)}
      </Text>
      <Text style={styles.result}>
        {text}
      </Text>
    </View>
  );
};
