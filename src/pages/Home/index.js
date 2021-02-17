import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home(props){
    const {navigation} = props;

    return(
        <SafeAreaView
            style={{
                flex:1,
                alignItems: 'center',
                justifyContente: 'center',
                backgroundColor: '#FFE4E1'
            }} >
                <Text style={{color: 'black'}}>Seja Bem vindo ao Adote!</Text>
 
        </SafeAreaView>
    )
}