import React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export default function Home(props){
    const {navigation} = props;

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.views}>
                <Image source={require('../Cadastro/dogs.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.views}>
                <Text style={styles.titulo}>NÃO COMPRE, ADOTE</Text>
                <Text style={styles.texto}>
                    Sua ajuda faz toda a diferença na vida desses bichinhos. {"\n"}
                    Dê uma nova chance para você e para o seu novo melhor amigo.{"\n"}{"\n"}
                    <Text style={styles.titulo}>Adote ou Apadrinhe um PET.</Text> 
                </Text> 
            </View>
            <View style={styles.views}>
            
                <TouchableOpacity style={styles.btncadastro}
                    tittle = "Apadrinhar" onPress={()=>navigation.navigate('Feed')}
                > 
                <Text>Apadrinhar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btncadastro}
                    tittle = "Adotar" onPress={()=>navigation.navigate('Feed')}
                > 
                <Text>Adotar</Text>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE4E1',
      alignItems: 'center',
      justifyContent: "space-between",
      
    },
    views:{
        flex: 0.3,
    },
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin:20
    },
    texto: {
      fontSize: 20,
      fontWeight: "300",
      textAlign: "justify",
      margin:20
    },
    logo: {
      margin: 0,
      padding: 10,
      width: 200,
      height: 200,
      borderRadius:50,
      position: 'relative',
      justifyContent: 'flex-start'
    },
    btncadastro: {
      backgroundColor: '#FFA07A',
      marginTop: 20,
      padding: 5,
      borderRadius: 50,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
    },
    btntexto: {
      fontWeight: '500',
      fontSize: 18,
      
      
      
    }
  
  });