import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity, Linking } from 'react-native';


const botDados = () => {
  Linking.openURL('https://github.com/periclesanfe/BOT_DADOS');
};


class ReactPage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.header}>
        <Image style={styles.foto} resizeMode="cover" source={require('./assets/python.png')}></Image>
      </View>
      <ScrollView style={styles.budy}>
        <TouchableOpacity onPress={botEmail} style={styles.article}>
          <Image style={{height:60, width:250}}source={require('./assets/projetoPython.png')}></Image>
          <Text style={styles.text}>
            BOT DE ENVIAR EMAILS
          </Text>

        </TouchableOpacity>
      </ScrollView>

  </ScrollView>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
  },
  header: {flexShrink: 0, alignItems:'center', width: 370, borderRadius: 20, margin: 20 },
  foto: {height: 110, width: 100, borderRadius: 10},
  budy: {flex:1, marginLeft: 30, marginRight: 30},
  article: {flex:1, margin: 10, padding: 10, borderRadius: 10, backgroundColor: '#fff'},
  paragraph: {marginBotton: 20, marginTop: 5},
  title: {fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#444',
    marginBottom: 10,
    marginTop: 5},
  text: {
  fontSize: 14, 
  color: '#444',
  textAlign: "center"},
  });

export default ReactPage;