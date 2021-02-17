import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActionSheetIOS, Image } from 'react-native';

export default class Lista extends Component {
  state = {
    data: [
      { id: 0, full_name: 'Jolie', idade: '3 meses', porte: 'P/M', image: require('../../../assets/jolie.jpg')},
      { id: 1, full_name: 'Jully', idade: '2 anos', porte: 'P/M', image: require('../../../assets/jully.jpg')},
      { id: 2, full_name: 'Lion', idade: '1 ano', porte: 'M', image: require('../../../assets/lion.jpg')},
      { id: 3, full_name: 'Muffin', idade: '4 meses', porte: 'P/M', image: require('../../../assets/muffin.jpg')},
      { id: 4, full_name: 'Panda', idade: '4 meses', porte: 'P/M', image: require('../../../assets/panda.jpg')},
      { id: 5, full_name: 'Pitoco', idade: '3 anos', porte: 'M/G', image: require('../../../assets/pitoco.jpg')},
      { id: 6, full_name: 'Rachel', idade: '2 meses', porte: 'P', image: require('../../../assets/rachel.jpg')},
      { id: 7, full_name: 'Tapioca', idade: '3 anos', porte: 'M/G', image: require('../../../assets/tapioca.jpg')},
      { id: 8, full_name: 'Twix', idade: '2 meses', porte: 'P', image: require('../../../assets/twix.jpg')},
      { id: 9, full_name: 'Vanilla', idade: '7 meses', porte: 'M', image: require('../../../assets/vanilla.jpg')},
      { id: 10, full_name: 'Cookie', idade: '5 meses', porte: 'M/G', image: require('../../../assets/cookie.jpg')},
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={item.image} style={{ width: 250, height: 200, borderRadius: 30, margin: 5}}></Image>
      <Text>{item.full_name}</Text>
      <Text>Idade: {item.idade}</Text>
      <Text>Porte: {item.porte}</Text>

    </View>
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 30}}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    width: 400,
    alignItems: 'center',
    
    
  },

  listItem: {
    marginTop: 20,
    padding: 30,
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 30,
    backgroundColor: '#FFA07A'

  },
});