import React, { Component , useState } from 'react';
import {View, Text, Button, Image, StatusBar, StyleSheet} from 'react-native';

function App(){

  return (
    <View style={{
      flex:1,
      flexDirection: 'column',
      alignItems:'flex-start',
      justifyContent: 'flex-end'
    }}>
      <StatusBar> </StatusBar>
      <Text>Dorgival Dantas</Text>
      <Text>Australopitecus</Text>
      <Text>Americanas</Text>
    <View style={{flex:1, height:50, backgroundColor:'red'}}>

    </View>
    <View style={{flex:8, height:50, backgroundColor:'green'}}></View>
    <View style={{flex:1, height:50, backgroundColor:'blue'}}></View>

    </View>
  )
  
}export default App;


  
  /*return (
    <View style={{backgroundColor: 'black', flex:1}}>
      <Text style={styles.titulo}>QUEM SOU EU?</Text>
      <Text style={styles.titulo}>Olá, Meu nome é Péricles!</Text>
      <Text style={styles.texto}>Eu sou aluno do IFAL campus Maceió, </Text>
    </View>
  );

  
  
}

const styles = StyleSheet.create({


  titulo:{
    fontSize: 20,
    color: '#FFF'
  },

  texto:{
    color:'#FFF',
    fontSize: 18,
    marginTop: 20
  }
})*/


/*const [nome, setNome]=useState('Pericles');
const [idade, setIdade]=useState(25);

function entrar(){

setNome('Pericles Aluno');
setIdade(20)
}

return (
  <View>
    <StatusBar> </StatusBar>
    <Button title='MUDAR NOME' onPress={entrar}/>
    <Text style={{color: '#FF0000', fontSize: 50}}>{nome}</Text>
    <Text style={{fontSize: 30}}>{idade}</Text>
  </View>

);*/


/*let nome = 'professor';

    return(
      <View>
        <StatusBar> </StatusBar>
        <Text>Usando Classe em RN</Text>
        <Text style={{color: '', fontSize: 50, margin: 15}}>
        <Text>Péricles Andrade</Text>
        </Text>

        <Image
        source={{uri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbee51547d96c0dd1/63d58edf4aa4753ff5f60de1/GettyImages-1460332769.jpg'}}
        style={{ width: 400, height: 250 }}
        />

      </View>
    );*/