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
                <Text style={{color: 'black'}}>Conheça nossos aumigos disponíveis para doação</Text>

        </SafeAreaView>

    )
}