import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Lista from './lista';

export default function Home({navigation}){
    
    return(
        <SafeAreaView style={styles.container} >
            <Text style={styles.titulo}>Conheça os peludos disponíveis para doação</Text>
            <Lista />

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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        margin:20
    },
    texto: {
      fontSize: 20,
      fontWeight: "300",
      textAlign: "justify",
      margin:20
    }

});