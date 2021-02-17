import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';


export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView 
    behavior={"padding"}
    style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar hidden />
          
          <Image source={require('../Cadastro/dogs.png')} style={styles.logo}>
          </Image>

          <TextInput 
            style={styles.input}
            placeholder="Digite seu email" onChangeText = {text => setEmail(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Digite sua senha" onChangeText = {text => setSenha(text)}
            secureTextEntry={true}/>

          <TouchableOpacity style = {styles.btncadastro} onPress={() => logar()}>
            <Text style = {styles.btntexto}>Entrar</Text>
          </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'verdana'
  },
  texto: {
    fontSize: 20,
    fontWeight: "500"
  },
  logo: {
    margin: 0,
    padding: 10,
    width: 180,
    height: 180,
    borderRadius:50,
    position: 'relative'
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50
  },
  btncadastro: {
    color: 'white',
    backgroundColor: '#FFA07A',
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  btntexto: {
    fontWeight: '500',
    fontSize: 18
  }

});