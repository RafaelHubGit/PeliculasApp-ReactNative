import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackGround } from '../components/GradientBackGround';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

// const windowWidth  = Dimensions.get('window').width;
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreens = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  const { setMainColors } = useContext( GradientContext );

  const getPostercolors = async( index: number) => {

    
    const movie = nowPlaying[ index ];
    const url = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( url );

    setMainColors({ primary, secondary });
  }

  useEffect(() => {
    if( nowPlaying.length > 0 ){
      getPostercolors( 0 );
    }
  }, [nowPlaying])
  

  if ( isLoading ){
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <ActivityIndicator color="red" size={120} />
      </View>
    )
  }

  return (
    <GradientBackGround>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>

          {/* carousel principal */}
          <View
            style={{
              height: 740
            }}
          >
            <Carousel 
              data={ nowPlaying }
              renderItem={ ( {item}: any ) => <MoviePoster movie={ item } /> }
              sliderWidth={ windowWidth }
              itemWidth={ 500 }
              inactiveSlideOpacity={ 0.9 }
              onSnapToItem={ index => getPostercolors( index ) }
            />
          </View>

          {/* peliculas populares  */}
          <HorizontalSlider title='Populares' movies={ popular } />
          <HorizontalSlider title='Top Rated' movies={ topRated } />
          <HorizontalSlider title='Upcoming' movies={ upcoming } />
          

        </View>
      </ScrollView>
    </GradientBackGround>
  )
}
