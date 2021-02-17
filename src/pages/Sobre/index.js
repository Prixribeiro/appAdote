import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    
    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.views}>
                <Text style={styles.titulo}>Conheça nossa história</Text>
            </View>
            <View>
                <Text style={styles.texto}>
                O <Text style={styles.titulo}>Projeto ADOTE </Text>é um projeto sem fins lucrativos que tem por objetivo e finalidade salvar e transformar vidas, por meio do resgate de cães e gatos abandonados ou vítimas de maus tratos.
                </Text>
                <Text style={styles.texto}>
                A nossa missão é conectar vidas, pois a adoção não transforma apenas a vida do peludinho, ela transforma a vida dos adotantes, que passam a conhecer o <Text style={styles.titulo}>AMOR </Text>mais puro e genuíno que um animal pode proporcionar!  
                </Text> 
                <Text style={styles.texto}>
                Faça seu<Text style={styles.titulo}> cadastro </Text>para ficar por dentro de nossos resgates e acompanhar a situação dos nosso resgatados.
                </Text>
            </View>
            <View style={styles.views}>
                <TouchableOpacity style={styles.btncadastro}
                    tittle = "cadastro" onPress={()=>navigation.navigate('Cadastro')}
                >
                    <Text>Cadastre-se</Text>
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
        flex: 0.4,
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
      marginTop: 5,
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