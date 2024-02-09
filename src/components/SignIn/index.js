import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView } from 'react-native';
import LogoLogIn from '../../../assets/images/login.png';
import CustomInput from '../Form/CustomInput';
import CustomButton from '../Form/CustomButton';
import { useNavigation } from '@react-navigation/native';

function SignIn() {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();
    const widthOfLogo = width * 0.7; // Độ rộng logo chiếm 70% độ rộng màn hình
    const heightOfLogo = height * 0.3; // Chiều cao logo chiếm 30% chiều cao màn hình

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Alert.alert('Đăng nhập', 'Đăng nhập');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleRegister = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <Image source={LogoLogIn} resizeMode='contain' style={{ width: widthOfLogo, height: heightOfLogo }} />

                <View style={styles.custom_inputs}>
                    <CustomInput title='Tài khoản' value={username} setValue={setUsername} placeholder='Vui lòng nhập tài khoản' />
                    <CustomInput title='Mật khẩu' value={password} setValue={setPassword} placeholder='Vui lòng nhập mật khẩu' isPassWord={true} />

                    <CustomButton title='Đăng nhập' backgroundBtn='#3B71F3' backgroundText='#fff' onPress={handleLogin} />
                    <CustomButton title='Quên mật khẩu' backgroundBtn='#EDE4E3' backgroundText='#000' onPress={handleForgotPassword} />
                    <CustomButton title='Chưa có tài khoản ? Đăng ký mới' backgroundBtn='#EDE4E3' backgroundText='#000' onPress={handleRegister} />
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

export default SignIn;
