import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function CustomInput({ title, value, setValue, placeholder, isPassWord = false }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={isPassWord} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5
    },
    label: {
        fontStyle: 'italic',
        fontSize: 17,
        fontWeight: '700',
        padding: 5,
        marginBottom: 5
    },
    input: {
        fontSize: 17,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8
    }
});

export default CustomInput;
