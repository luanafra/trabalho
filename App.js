import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InteracaoScreen from './InteracaoScreen';
import TelaDetalhes from './TelaDetalhes';
import TelaInicial from './TelaInicial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaInicial"
        screenOptions={{
          headerStyle: { backgroundColor: '#4B3DBB' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: 'Biblioteca' }}
        />
        <Stack.Screen
          name="Interacao"
          component={InteracaoScreen}
          options={{ title: 'Biblioteca Interativa' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{ title: 'Detalhes do Livro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

