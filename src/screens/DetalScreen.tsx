import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { RootStackparams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackparams, 'DetailScreen'>{}; //Esto se hace para que reciba los parametros por el route 

export const DetailScreen = ( { route }: Props ) => { //aqui se esta obteniendo el route 
  
  const movie = route.params;
  const url = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
          <Image
            source={{ uri: url }}
            style={ styles.posterImage }
          />
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }> { movie.original_title } </Text>
        <Text style={ styles.title }> { movie.title } </Text>
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red',
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    // height: '70%'
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1
  },
  marginContainer: {
    marginTop: 25,
    marginHorizontal: 20
  },
  subTitle: {
    fontSize: 28,
    opacity: 0.8
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})