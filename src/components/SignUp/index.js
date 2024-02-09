import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView } from 'react-native';
import LogoSignUp from '../../../assets/images/signup.png';
import CustomInput from '../Form/CustomInput';
import CustomButton from '../Form/CustomButton';
import { useNavigation } from '@react-navigation/native';

function SignUp() {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();
    const widthOfLogo = width * 0.7; // Độ rộng logo chiếm 70% độ rộng màn hình
    const heightOfLogo = height * 0.3; // Chiều cao logo chiếm 30% chiều cao màn hình

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        navigation.navigate('ConfirmEmail');
    };

    const handleLogin = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <Image source={LogoSignUp} resizeMode='contain' style={{ width: widthOfLogo, height: heightOfLogo }} />

                <View style={styles.custom_inputs}>
                    <CustomInput title='Email' value={email} setValue={setEmail} placeholder='Vui lòng nhập email' />
                    <CustomInput title='Số điện thoại' value={phone} setValue={setPhone} placeholder='Vui lòng nhập số điện thoại' />
                    <CustomInput title='Tài khoản' value={username} setValue={setUsername} placeholder='Vui lòng nhập tài khoản' />
                    <CustomInput title='Mật khẩu' value={password} setValue={setPassword} placeholder='Vui lòng nhập mật khẩu' isPassWord={true} />
                    <CustomInput title='Xác thực mật khẩu' value={confirmPassword} setValue={setConfirmPassword} placeholder='Vui lòng xác thực mật khẩu' isPassWord={true} />

                    <CustomButton title='Đăng ký' backgroundBtn='#3B71F3' backgroundText='#fff' onPress={handleRegister} />
                    <CustomButton title='Đã có tài khoản ? Đăng nhập' backgroundBtn='#EDE4E3' backgroundText='#000' onPress={handleLogin} />
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

export default SignUp;
