import  React, { useState }  from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

function App(){

  function bemVindo(){
    Alert.alert('Bem Vindo!');
  }


    return(

      <View style={styles.container}>

      <Button 
        title='APERTE' 
        color='black'
        onPress={bemVindo}
      />

      </View>
    );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    fontSize: 100,
  },

})

export default App;