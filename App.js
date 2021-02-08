import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/dogs.png')} style={styles.logo}>
      </Image>

      <Text style={styles.texto}>Adote um vira-lata!</Text>
      <StatusBar style="auto" />

      <TextInput 
        style={styles.input}
        placeholder="Digite seu usuário" />

      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha" 
        secureTextEntry={true}/>

      <Button
        title="Entrar"
        color="#FE434C"
        
      />

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'verdana'
  },
  texto: {
    fontSize: 20,
    fontWeight: "500"
  },
  logo: {
    margin: 20,
    padding: 20,
    width: 250,
    height: 250,
    borderRadius:50
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50
  }

});

