import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { CONSTANT_COLOR } from './globalColors'

type ButtonProps = {
    name: string,
    onPress: () => void,
    disabled: boolean
}

const Button = ({name, onPress, disabled }:ButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.loginButton}
            disabled={disabled}
            onPress={onPress}
            >
                <Text style={styles.profileNameText}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 20

    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANT_COLOR?.blue,
        height: 44,
        width: 324,
        borderRadius: 7,
        marginTop: 10
    },
     profileNameText: {
        fontSize: 16,
        fontWeight: '600',
        color: CONSTANT_COLOR?.white
    },
})