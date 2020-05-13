import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { metrics, images } from '../themes'
export function HomeScreen({ navigation }) {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Bắt đầu</Text>
                <Text style={styles.titleInput}>Số điện thoại</Text>
                <View style={styles.wrapInput}>
                    <TextInput value={phone} onChangeText={(text) => setPhone(text)} maxLength={11} style={styles.input} placeholder="098123***" />
                    <Image style={styles.image} source={images.tick} />
                </View>
                <Text style={styles.titleInput}>Mật khẩu</Text>
                <View style={styles.wrapInput}>
                    <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} placeholder="***" />
                    <Image style={styles.image} source={images.eye} />
                </View>
                <Text style={styles.forget} onPress={() => navigation.navigate('UpdatePassword')}>
                    Quên mật khẩu?
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MyProfile')}>
                    <Text style={styles.textButton}>
                        Đăng nhập
                </Text>
                </TouchableOpacity>
                <View style={styles.register}>
                    <Text style={styles.text}>
                        Bạn chưa có tài khoản?
                </Text>
                    <Text style={styles.textColor}>
                        Đăng kí
                </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: metrics.screenHeight / 16,
        fontSize: 20
    },
    titleInput: {
        marginTop: 20,
        fontSize: 17
    },
    image: {
        height: 20,
        width: 20
    },
    wrapInput: {
        flexDirection: "row",
        paddingVertical: 16,
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 18,
        flex: 1,
        marginRight: 10,
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    forget: {
        textAlign: 'right',
        fontSize: 15,
        color: '#b3b3b3'
    },
    button: {
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 16
    },
    register: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingHorizontal: 5,
        color: '#b3b3b3',
        fontSize: 15
    },
    textColor: {
        paddingHorizontal: 5,
        color: '#0066ff',
        fontSize: 15
    }
});
