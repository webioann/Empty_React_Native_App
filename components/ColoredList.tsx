import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const ColoredList = ({color}: {color: string}) => {
    return (
        <ScrollView 
        contentContainerStyle={styles.container}>
        {
            [1, 0.8, 0.6, 0.4].map(opacity=> (
            <View 
                key={opacity} 
                style={[styles.color, {backgroundColor: color, opacity}]} 
            />
            ))
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    color: {
        width: '100%',
        height: 100,
        borderRadius: 15,
        borderCurve: 'continuous', 
        marginBottom: 15,
    },
    container: {
        paddingHorizontal: 10, 
        paddingVertical: 10, 
    }
})

export default ColoredList;