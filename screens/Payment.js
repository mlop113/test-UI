import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { metrics, images } from '../themes'
import RNPickerSelect from 'react-native-picker-select'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        select: true
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        select: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        select: false
    },
];

export function Payment({ navigation }) {
    const renderItem = ({ item }) => {
        return (
            <View style={[styles.wrapCard, item.select && { backgroundColor: 'red' }]}>
                <Image source={images.commerce} style={[styles.image, item.select && { tintColor: 'white' }]} />
                <Text style={[styles.textCard, item.select && { color: 'white' }]}>Thanh toán bằng thẻ</Text>
                <Text style={[styles.nameCard, item.select && { color: 'white' }]}>TEKMEDI</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.back} style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Thanh Toán</Text>
                    <TouchableOpacity>
                        <Image source={images.time} style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.flatList}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={DATA}
                        extraData={DATA}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                </View>
                <Text style={[styles.title, { marginTop: 50 }]}>Lựa chọn đơn vị</Text>
                <View style={styles.modal}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'BV.Chợ Rẫy',
                            value: 1,
                            color: '#909090',
                        }}
                        Icon={() => { return (<Image source={images.back} style={styles.iconSmall} />) }}
                        textInputProps={{ style: { fontSize: 20 } }}
                        onValueChange={(value) => console.log(value)}
                        style={{ height: 40, marginLeft: 20 }}
                        items={[
                            { label: 'BV.Miền Đông', value: 2 },
                            { label: 'BV.Hòa Hảo', value: 3 },
                        ]}
                    />
                </View>
                <Text style={styles.title}>Số thẻ</Text>
                <Text style={styles.value}>79-02-01-000001</Text>
                <Text style={styles.title}>Tên chủ thẻ</Text>
                <Text style={styles.value}>Vũ Trần Minh</Text>
                <Text style={styles.title}>Giới tính/ Năm sinh/ CMT</Text>
                <Text style={styles.value}>Nam/ 1998/ 123444444</Text>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    icon: { height: 24, width: 24 },
    iconSmall: { height: 16, width: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between' },
    wrapCard: { borderRadius: 10, padding: 16, marginRight: 10, width: metrics.screenWidth / 2 - 10 },
    image: { height: 40, width: 40, tintColor: 'blue', alignSelf: 'flex-end' },
    textCard: { fontSize: 11 },
    nameCard: { fontWeight: 'bold', fontSize: 18 },
    flatList: {
        marginTop: 40
    },
    modal: {
        marginLeft: 40,
        marginVertical: 16
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 18
    },
    value: {
        marginLeft: 40,
        marginTop: 20,
        fontSize: 18
    },
    button: {
        backgroundColor: 'red',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: metrics.screenWidth - 40
    },
    textButton: {
        color: 'white',
        fontSize: 20
    }
});
