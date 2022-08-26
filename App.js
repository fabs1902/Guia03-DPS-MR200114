import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import React, {Component} from 'react';
//import {AppRegistry} from 'react-native';

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}/>
    </SafeAreaView>
   
  );
}

const DATA = [
  {
    id: '1',
    title: 'Honda',
    src:require('./src/imgs/honda.jpg')
  },
  {
    id: '2',
    title: 'Mercedes',
    src:require('./src/imgs/mercedes.jpg')
  },
  {
    id: '3',
    title: 'Ferrari',
    src:require('./src/imgs/ferrari.jpg')
  }
];

const Item = ({title, img}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={img} />
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems:'center'
    },
    title: {
      fontSize: 32,
    },
    img:{
      width:200,
      height:125,
      borderWidth:2,
      borderColor:'#d35647',
      resizeMode:'contain',
      margin:8
    }
});
