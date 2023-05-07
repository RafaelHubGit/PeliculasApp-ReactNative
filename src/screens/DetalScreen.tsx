import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Navigation, RootStackparams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackparams, 'DetailScreen'>{}; //Esto se hace para que reciba los parametros por el route 

export const DetailScreen = ( { route, navigation }: Props ) => { //aqui se esta obteniendo el route 
  
  const movie = route.params;
  const url = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, cast, movieFull } = useMovieDetails( movie.id );

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image
            source={{ uri: url }}
            style={ styles.posterImage }
          />
        </View>
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }> { movie.original_title } </Text>
        <Text style={ styles.title }> { movie.title } </Text>
      </View>

      
        {
          isLoading 
            ? <ActivityIndicator size={60} color="grey" style={{ marginTop: 20 }}/>
            : <MovieDetails movieFull={ movieFull! } cast={ cast }/>
        }

        {/* boton para cerrar  */}
        <TouchableOpacity 
          style={ styles.backBotton }
          onPress={ () => navigation.pop() }
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={ 60 }
          />
        </TouchableOpacity>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    // overflow: 'hidden',
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

    // borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10

  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
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
    fontSize: 30,
    opacity: 0.9
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  backBotton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5
  }
})