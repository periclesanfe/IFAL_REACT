import  React, { useState }  from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function App(){
  const[nome, setNome] = useState('');
  const[input, setInput] = useState('');

  function entrar(){

    if(input === ''){
      alert('Digite seu nome por favor...');
      return;
    }

    setNome('bem vindo: ' + input)

  }


    return(
     <View style={styles.container}>

      <TextInput
      style={styles.input}
      placeholder =' digite seu nome'
      onChangeText={(texto) => setInput(texto)}
      />

      <Button title='Atualizar' onPress={entrar}/>

      <Text style={styles.texto}>{nome}</Text>

     </View>
    );

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  input:{
    height:45,
    borderWidth: 4,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto:{
    textAlign:'center',
    fontSize:30,
    marginTop: 40
  }

})

export default App;