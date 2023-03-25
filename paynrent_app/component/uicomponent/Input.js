import { useState, useEffect } from "react";
import { Text, StyleSheet, TextInput, Dimensions, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

export default function Input({ labelTxt, setValue, error, iconName, ...props }) {
    return (
        <View style={{ padding: 2, width: width * 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 5, fontWeight: 'bold' }}>{labelTxt}</Text>
            <View style={styles.textContainer}>
                <Icon name={iconName} style={{ fontSize: 22, position: 'absolute', top: '35%', left: '8%' }} />
                <TextInput style={{ fontSize: 14, marginLeft: 50 }}  {...props} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        width: width * 0.8,
        backgroundColor: '#f2f2f2',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: '#3498db',
        padding: 5,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'

    }
})