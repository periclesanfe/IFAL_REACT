import  React, { useState }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';

export default function App() {
  const[text, setText] = useState('');

  let frases = [
    'O coração é o mais forte músculo.',
    'O espírito humano é inquebrável.',
    'Se há medo em seu coração, ouça a voz do medo. Então, conquiste-o.',
    'O futuro é algo que construímos juntos.',
    'Uma luta sem confiança é uma luta perdida.',
    'Porque quando todo mundo está superado, você é a esperança que eles precisam.',
    'Forte como uma montanha, ágil como um rio, nossa força vem do rio Freljord.',
    'Não importa o quão forte você é, sempre há alguém mais forte. Por isso, nunca lute sozinho.',
    'A união traz a força.',
    'O maior tesouro que um homem pode ter é um amigo verdadeiro.'
  ]
  
  function clickBraum(){
    setText('');
    let numeroAleatorio = Math.floor(Math.random()*frases.length);
    setText(' " ' + frases[numeroAleatorio] + ' " ');
  }

  return (
    <View style={styles.container}>
        <StatusBar/>
        
        <TouchableOpacity style = {[styles.botao, {marginTop: 30}, {borderColor: 'black'}]} onPress={clickBraum}>
          <View style={styles.btnarea}>
          <ImageBackground source={{uri:"https://static1-es.millenium.gg/articles/0/43/22/0/@/224967-braum-article_image_d-1.jpg",}} style={styles.image}>
            <Text style={styles.btntexto}> GERAR FRASE DO BRAUM</Text>
          </ImageBackground>
          </View>
        </TouchableOpacity>

        <Text style={styles.texto}>{text}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  image:{
    flex:1,
    resizeMode: 'cover'
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
    fontSize:30,
    marginTop: 40,
    color: 'white'
  },
  texto:{
    fontSize: 20,
    color: 'blue',

  }

});
