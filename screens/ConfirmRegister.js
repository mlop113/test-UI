import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { metrics, images } from '../themes'
export function ConfirmRegister({ navigation }) {
    const [phone, setPhone] = useState('')
    const m = 1
    const s = 30
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Xác nhận đăng kí</Text>
                <Text style={styles.text}>Vui lòng nhập đúng 4 kí tự gửi về sms</Text>
                <View style={styles.wrapInput}>
                    <TextInput value="asasasasa"/>
                </View>
                <Text style={styles.time}>Thời gian còn lại {m} : {s}</Text>

                <TouchableOpacity style={styles.button} onPress={() => { }}>
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
    text: {
        marginTop: 20,
        fontSize: 15,
        color: '#8c8c8c'
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
        marginTop: 40,
        marginBottom: 10,
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
    time: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#8c8c8c'
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
