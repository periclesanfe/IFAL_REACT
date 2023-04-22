import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

class Biografia extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" hidden/>
        <View style={styles.header}>
          <Image style={styles.foto} resizeMode="cover" source={require('./assets/eu.jpg')}></Image>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 10}}>Péricles Andrade Feitoza</Text>
        </View>
        <ScrollView style={styles.budy}>
          <View style={styles.paragraph}>
            <Text style={styles.title}>
              QUEM SOU EU?
            </Text>
            <Text style={styles.text}>
              Meu nome é Péricles Andrade Feitoza, tenho 20 anos, natural de Delmiro Gouveia - AL, atualmente resido na cidade de Maceió - AL, sou estudante de Bacharelado em Sistemas de Informação na Universidade Federal de Alagoas (IFAL), e atualmente estou cursando o 2º período. Sou apaixonado por tecnologia, e estou sempre em busca de novos conhecimentos, e sempre disposto a aprender coisas novas.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.title}>
              FORMAÇÃO
            </Text>
            <Text style={styles.text}>
              Curso Técnico Integrado, Tecnologia de Biocombustíveis
              Instituto Federal da Bahia - IFBA, ago 2017 - dez 2021
            </Text>
            <Text style={styles.text}>
              Bacharelado em Sistemas de Informação
              Instituto Federal de Alagoas - IFAL, ago 2022 - cursando
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.title}>
              EXPERIÊNCIA PROFISSIONAL
            </Text>
            <Text style={styles.text}>
              Estágio em Lessionar Robótica e Programação
              Zoom Education LDTA / Colégio Marista Maceió, mar 2023 - atualmente
            </Text>
          </View>
        </ScrollView>


    </View>
    );
  };
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 1000,
    },
    header: {flexShrink: 0, alignItems:'center', width: 370, borderRadius: 20, margin: 20 },
    foto: {height: 150, width: 150, borderRadius: 10},
    budy: {flex:1, marginLeft: 30, marginRight: 30},
    article: {},
    paragraph: {marginBotton: 20, marginTop: 5},
    title: {fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      color: '#444',
      marginBottom: 10,
      marginTop: 5},
    text: {
    fontSize: 14,
    color: "black",
    textAlign: "justify"},
  });

export default Biografia;