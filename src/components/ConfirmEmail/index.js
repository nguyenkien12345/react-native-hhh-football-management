import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView } from 'react-native';
import LogoConfirmEmail from '../../../assets/images/confirm.png';
import CustomInput from '../Form/CustomInput';
import CustomButton from '../Form/CustomButton';
import { useNavigation } from '@react-navigation/native';

function ConfirmEmail() {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();
    const widthOfLogo = width * 0.7; // Độ rộng logo chiếm 70% độ rộng màn hình
    const heightOfLogo = height * 0.3; // Chiều cao logo chiếm 30% chiều cao màn hình

    const [code, setCode] = useState('');

    const handleResetCode = () => {
        Alert.alert('Gửi lại mã', 'Gửi lại mã');
    };

    const handleRegister = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <Image source={LogoConfirmEmail} resizeMode='contain' style={{ width: widthOfLogo, height: heightOfLogo }} />

                <View style={styles.custom_inputs}>
                    <CustomInput title='Code' value={code} setValue={setCode} placeholder='Vui lòng nhập mã code' isPassWord={true} />

                    <CustomButton title='Xác thực' backgroundBtn='#3B71F3' backgroundText='#fff' onPress={handleRegister} />
                    <CustomButton title='Gửi lại mã' backgroundBtn='#EDE4E3' backgroundText='#000' onPress={handleResetCode} />
                    <CustomButton title='Quay lại trang đăng nhập' backgroundBtn='#EDE4E3' backgroundText='#000' onPress={handleRegister} />
                </View>
            </SafeAreaView>
        </ScrollView >
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

export default ConfirmEmail;
