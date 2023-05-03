import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { DetailScreen } from '../screens/DetalScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackparams = { //Define los parametros que cada uno va a recibir
  HomeScreens: undefined;
  DetailScreen: Movie;
} 

const Stack = createStackNavigator<RootStackparams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                // backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}