import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';


export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const logar = () => {
    alert("usuário logado!");
    
  }

  const redefinir= () => {
    alert("Email de redefinição de senha enviado com sucesso!");
    
  }

  return (
    <KeyboardAvoidingView 
    behavior={"padding"}
    style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
        <View style={styles.views}> 
          <Text style={styles.titulo}>Entre na sua conta</Text>
        </View>
        
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
          <TouchableOpacity style = {styles.views} >
            <Button color="#000" onPress={()=>navigation.navigate('Cadastro')} title="Ainda não tem cadastro? Clique aqui!"/> 
            <Button color="#000" onPress={()=> redefinir()} title="Esqueci minha senha"/> 
          </TouchableOpacity>
          </SafeAreaView>
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
  },
  views: {
    flex: 0.3,
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
  },
  titulo:{
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    margin:20,
    alignItems: 'flex-start',
  },
  botao:{
    fontSize: 12,
    margin: 20,
    padding:20
  },

});