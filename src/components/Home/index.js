import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Home;
