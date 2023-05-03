import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast;
}

export const CastItem = ( { actor }: Props ) => {

    const url = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

  return (
    <View style={ styles.container}>

        {
            actor.profile_path && (
                <Image
                    source={{ uri: url }}
                    style={{ width: 80, height: 80, borderRadius: 10 }}
                />
            )
        }

        <View style={ styles.actorInfo }>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                { actor.name }
            </Text>
            <Text style={{ fontSize: 22, opacity: 0.7 }}>
                { actor.character }
            </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
        marginHorizontal: 25,
        paddingRight: 10,
        
    },
    actorInfo: {
        marginLeft: 10,
        paddingTop: 8
    }
})