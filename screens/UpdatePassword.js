import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { metrics, images } from '../themes'
export function UpdatePassword({navigation}) {
    const [phone, setPhone] = useState('')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Cập nhập mật khẩu</Text>
                <View style={styles.wrapInput}>
                    <TextInput value={phone} onChangeText={(text) => setPhone(text)} maxLength={11} style={styles.input} placeholder="Số điện thoại" />
                    <Image style={styles.image} source={images.tick} />
                </View>
                <Text style={styles.titleInput}>VD: 0981418198</Text>
               
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmRegister')}>
                    <Text style={styles.textButton}>
                        Đăng ký
                </Text>
                </TouchableOpacity>
            </View>
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
    button: {
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 16
    },
});
