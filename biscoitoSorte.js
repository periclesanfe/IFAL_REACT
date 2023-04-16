import  React, { useState }  from 'react';
import {View, Text, StyleSheet,StatusBar ,SafeAreaView, TouchableOpacity} from 'react-native';

function App(){
  const[text, setText] = useState('');

  let frases = [
    'Seja honesto com o próximo e será feliz sempre',
    'Siga os bons e aprenda com eles',
    'Será difícil, mas não imporssível',
    'Nunca deixe alguem falar que vc não consegue, vc mesmo fala',
    'acredite em milagres, mas não dependa deles',
    "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
    "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
    "Seus sonhos não precisam de plateia, eles só precisam de você.",
    "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo"
  ]

  function quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length);
    setText(' " ' + frases[numeroAleatorio] + ' " ');
  }

  function resetarBiscoito(){
    setText('');
  }

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar/>

        <Text style={styles.texto}>{text}</Text>

        <TouchableOpacity style = {[styles.botao, {marginTop: 30}, {borderColor: 'black'}]} onPress={quebrarBiscoito}>
          <View style={styles.btnarea}>
            <Text style={styles.btntexto}> Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.botao, {marginTop: 30}, {borderColor: 'black'}]} onPress={ resetarBiscoito}>
          <View style={styles.btnarea}>
            <Text style={styles.btntexto}> resetar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  btnarea:{
    height:150,
    borderWidth: 4,
    margin: 10,
    padding: 2,
    fontSize: 10
  },
  btntexto:{
    textAlign:'center',
    fontSize:10,
    marginTop: 40
  }

})

export default App;