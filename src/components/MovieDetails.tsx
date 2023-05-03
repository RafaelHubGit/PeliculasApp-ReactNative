import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon  from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ( { movieFull, cast } : Props ) => {
  return (
    <>
        {/* detalles */}
        <View style={{ marginHorizontal: 25 }}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Icon 
                    name="star-outline"
                    color="grey"
                    size={ 30 }
                />
                <Text style={{ fontSize: 25 }}> { movieFull.vote_average } </Text>

                <Text style={{ fontSize: 25, marginLeft: 5 }}>
                    - { movieFull.genres.map( g => g.name ).join(', ') }
                </Text>
            </View>

            {/* historis */}
            <Text style={ styles.title}>
                Historia
            </Text>
            <Text style={ styles.text }> { movieFull.overview } </Text>

            {/* presupuesto */}
            <Text style={ styles.title }> Presupuesto </Text>
            <Text style={ styles.text }> { currencyFormatter.format(movieFull.budget, { code:'USD' }) } </Text>
        </View>

        {/* casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
            <Text style={{ ...styles.title, marginHorizontal: 20 }}> Actores </Text>

            <FlatList
                data={ cast }
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({item}) => <CastItem actor={ item }  /> }
                horizontal= { true }
                showsHorizontalScrollIndicator={ false }
                style={{ marginTop:10, height: 90 }}
            />
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30
    },
    text: {
        fontSize: 27
    }
});