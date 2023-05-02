import React from 'react'
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

// const windowWidth  = Dimensions.get('window').width;
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreens = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

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
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        {/* carousel principal */}
        <View
          style={{
            height: 440
          }}
        >
          <Carousel 
            data={ nowPlaying }
            renderItem={ ( {item}: any ) => <MoviePoster movie={ item } /> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={ 0.9 }
          />
        </View>

        {/* peliculas populares  */}
        <HorizontalSlider title='Populares' movies={ popular } />
        <HorizontalSlider title='Top Rated' movies={ topRated } />
        <HorizontalSlider title='Upcoming' movies={ upcoming } />
        

      </View>
    </ScrollView>
  )
}
