import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    
    return(
        <SafeAreaView
            style={{
                flex:1,
                alignItems: 'center',
                justifyContente: 'center',
                backgroundColor: '#FFE4E1'
            }} >
                <Text style={{color: 'black'}}>Conheça nossa história</Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#FFA07A',
                        width: 100,
                        height: 30,
                        alignItems: 'center',
                        justifyContente: 'center',
                        borderRadius: 50
                    }}

                    tittle = "cadastro" onPress={()=>navigation.navigate('Cadastro')}
                >
                    <Text>Cadastre-se</Text>

                </TouchableOpacity>
        </SafeAreaView>

    )
}