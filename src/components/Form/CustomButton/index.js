import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CustomButton({ title, backgroundBtn, backgroundText, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: backgroundBtn }]}>
            <Text style={[styles.text, { color: backgroundText }]}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 8,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
    }
});

export default CustomButton;
