import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView } from 'react-native';
import LogoChangePassword from '../../../assets/images/change_password.png';
import CustomInput from '../Form/CustomInput';
import CustomButton from '../Form/CustomButton';
import { useNavigation } from '@react-navigation/native';

function ChangePassword() {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();
    const widthOfLogo = width * 0.7; // Độ rộng logo chiếm 70% độ rộng màn hình
    const heightOfLogo = height * 0.3; // Chiều cao logo chiếm 30% chiều cao màn hình

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <Image source={LogoChangePassword} resizeMode='contain' style={{ width: widthOfLogo, height: heightOfLogo }} />

                <View style={styles.custom_inputs}>
                    <CustomInput title='Mật khẩu mới' value={password} setValue={setPassword} placeholder='Vui lòng nhập mật khẩu' isPassWord={true} />
                    <CustomInput title='Xác thực mật khẩu mới' value={confirmPassword} setValue={setConfirmPassword} placeholder='Vui lòng xác thực mật khẩu' isPassWord={true} />

                    <CustomButton title='Đổi mật khẩu' backgroundBtn='#3B71F3' backgroundText='#fff' onPress={handleChangePassword} />
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

export default ChangePassword;
