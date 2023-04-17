import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from './TelaInicial';
import Historia from './TelaHistoria';
import React from 'react';
import { StyleSheet } from 'react-native';
import Crf from './CustomIcon'


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: 'black',
        }}
      >
        <Stack.Screen name="CRF" component={StackTabs} />
        <Stack.Screen 
          backgroundColor="black"
          name="PÁGINA INICIAL" 
          component={TelaInicial} 
        />
        <Stack.Screen 
          name="HISTORIA"
          component={Historia}
          options={{
            headerTintColor: 'red',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StackTabs = () => {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerStyle: styles.subheader,
          headerTitleStyle: styles.subheaderTitle,
          headerTintColor: 'black',
        }}
       tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'white',
        activeBackgroundColor: 'darkgray',
        inactiveBackgroundColor: 'black',
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
          name="FLAMENGO" 
          component={TelaInicial}
          options={{tabBarIcon: ({ color, size }) => (
              <Crf
                source={require('./assets/crf.png')} // Define o caminho da imagem
                style={{ width: 25, height: 25 }}
              />)}}
          />

        <Tab.Screen 
        name="HISTORIA" 
        component={Historia}
        options={{tabBarIcon: ({ color, size }) => (
            <Crf
              source={require('./assets/bandeira.png')} // Define o caminho da imagem
              style={{ width: 40, height: 40 }}
            />)}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  defaultNavigationOptions: {
    title: 'Título Padrão', // Título padrão do cabeçalho
    headerTintColor: 'white', // Cor do texto do cabeçalho
    headerStyle: {
      backgroundColor: 'blue', // Cor de fundo do cabeçalho
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Estilo do título do cabeçalho
    },
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
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
});

export default App;