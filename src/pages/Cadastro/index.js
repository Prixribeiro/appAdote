import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';


export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(senha);
  }

  return (
    <KeyboardAvoidingView 
    behavior={"padding"}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        <Image source={require('../Cadastro/dogs.png')} style={styles.logo}>
        </Image>

        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome" onChangeText = {text => setNome(text)}/>

        <TextInput 
          style={styles.input}
          placeholder="Digite seu email" onChangeText = {text => setEmail(text)}/>

        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha" onChangeText = {text => setSenha(text)}
          secureTextEntry={true}/>

        <TouchableOpacity style = {styles.btncadastro} onPress={() => cadastro()}>
          <Text style = {styles.btntexto}>Cadastrar</Text>
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
    margin: 10,
    padding: 10,
    width: 180,
    height: 180,
    borderRadius:50
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