import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView } from 'react-native';
import LogoForgotPassword from '../../../assets/images/forgot_password.png';
import CustomInput from '../Form/CustomInput';
import CustomButton from '../Form/CustomButton';
import { useNavigation } from '@react-navigation/native';

function ForgotPassword() {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();
    const widthOfLogo = width * 0.7; // Độ rộng logo chiếm 70% độ rộng màn hình
    const heightOfLogo = height * 0.3; // Chiều cao logo chiếm 30% chiều cao màn hình

    const [username, setUsername] = useState('');

    const handleForgotPassword = () => {
        navigation.navigate('ChangePassword');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <Image source={LogoForgotPassword} resizeMode='contain' style={{ width: widthOfLogo, height: heightOfLogo }} />

                <View style={styles.custom_inputs}>
                    <CustomInput title='Tài khoản' value={username} setValue={setUsername} placeholder='Vui lòng nhập tài khoản' />

                    <CustomButton title='Tiếp tục' backgroundBtn='#3B71F3' backgroundText='#fff' onPress={handleForgotPassword} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 20
    },
    custom_inputs: {
        flex: 1,
        width: '100%',
        marginTop: 20
    }
});

export default ForgotPassword;
