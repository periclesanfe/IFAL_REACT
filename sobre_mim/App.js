import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Biografia from './BIOGRAFIA';
import Python from './PYTHON';
import ReactPage from './REACT';
import JavaScript from './JAVASCRIPT';
import Contatos from './CONTATOS';
import { StyleSheet } from 'react-native';
import Icone from './CustomIcons'

const Tab = createBottomTabNavigator();

const StackTabs = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
       tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'darkgray',
        inactiveBackgroundColor: 'white',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          borderTopWidth: 1,
          borderTopColor: 'black',
        },
      }}
      >
        <Tab.Screen 
          name="BIOGRAFIA"
          component={Biografia}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <Icone
                source={require('./assets/profile.png')}
                style={{ width: 30, height: 30, tintColor: '#1F73D8'}}
              />)}}
        />

        <Tab.Screen 
        name="PYTHON" 
        component={Python}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icone
              source={require('./assets/python.png')} // Define o caminho da imagem
              style={{ width: 25, height: 30 }}
            />)}}
          />

        <Tab.Screen 
        name="REACT" 
        component={ReactPage}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icone
              source={require('./assets/react.png')} // Define o caminho da imagem
              style={{ width: 40, height: 45, tintColor: '#1F73D8' }}
            />)}}
          />

        <Tab.Screen 
        name="JAVASCRIPT" 
        component={JavaScript}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icone
              source={require('./assets/JavaScript.png')} // Define o caminho da imagem
              style={{ width: 30, height: 30 }}
            />)}}
          />
        
        <Tab.Screen 
        name="PHONE" 
        component={Contatos}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Icone
              source={require('./assets/phone.png')} // Define o caminho da imagem
              style={{ width: 30, height: 30, tintColor: '#1F73D8' }}
            />)}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultNavigationOptions: {
    title: 'Título Padrão', // Título padrão do cabeçalho
    headerTintColor: 'white', // Cor do texto do cabeçalho
    headerStyle: {
      backgroundColor: 'blue', // Cor de fundo do cabeçalho
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Estilo do título do cabeçalho
    },
    subheader: {
      backgroundColor: 'red',
      height: 35,
    },
    subheaderTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    },
  },});

export default StackTabs;