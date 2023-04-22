import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity, Linking } from 'react-native';


const ifalReact = () => {
  Linking.openURL('https://github.com/periclesanfe/BOT_DADOS');
};


class ReactPage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.header}>
        <Image style={styles.foto} resizeMode="cover" source={require('./assets/react.png')}></Image>
      </View>
      <ScrollView style={styles.budy}>
        <TouchableOpacity onPress={ifalReact} style={styles.article}>
          <Image style={{height: 100, width:293}}source={require('./assets/projetoReact.png')}></Image>
          <Text style={styles.text}>
            ESTUDOS EM REACT NATIVE - IFAL CURSO
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
  foto: {height: 130, width: 130, borderRadius: 100, tintColor: '#1F73D8'},
  budy: {flex:1, marginLeft: 30, marginRight: 30},
  article: {flex:1, margin: 10, padding: 10, borderRadius: 10, backgroundColor: '#000'},
  paragraph: {marginBotton: 20, marginTop: 5},
  title: {fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#444',
    marginBottom: 10,
    marginTop: 5},
  text: {
  fontSize: 14, 
  color: '#1F73D8',
  textAlign: "center"},
  });

export default ReactPage;