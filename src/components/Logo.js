import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo(){
    return(
        <View style={styles.container}>
            <Text style={[styles.logo, {color: '#2AA9E0'}]}>Mask</Text>
            <Text style={[styles.logo, {color: '#FFD700'}]}>Input</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
        flexDirection: 'row'
    },
    logo: {
        fontSize: 43,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})