import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { metrics, images } from '../themes'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export function Profile({ navigation }) {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginRight: 30, width: metrics.screenWidth / 2 }} onPress={() => navigation.navigate('Card')}>
                <Image source={images.checked} style={{ height: 40, width: 40, alignSelf: 'flex-end' }}
                />
                <Image source={images.environment} style={{ height: 40, width: 40, alignSelf: 'flex-start' }}
                />
                <Image source={images.commerce} style={{ height: 40, width: 40, alignSelf: 'flex-end', marginRight: 20 }}

                />
                <Text>7290009127810</Text>
            </TouchableOpacity>
        )
    }
    const renderRecord = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: 'white',
                borderWidth: StyleSheet.hairlineWidth / 2,
                marginBottom: 10,
                flexDirection: 'row', paddingVertical: 16,
                shadowColor: 'blue',
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowOpacity: 0.4
            }}>
                <View style={{ marginHorizontal: 16 }}>
                    <Text>Thang 10</Text>
                    <Text>07</Text>
                </View>
                <Image source={images.checked} style={{ height: 40, width: 40, marginRight: 20 }}
                />
                <View style={{ flex: 1 }}>
                    <Text>Kham Noi</Text>
                    <Text>Phong: 07</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.wrapContainer}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View style={styles.wrapInfo}>
                    <TouchableOpacity onPress={() => navigation.replace('Home')}>
                        <Image source={images.menu} style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.time} style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapAvatar}>
                    <Image source={images.eye} style={{ height: 60, width: 60 }} />
                    <Text style={{ flex: 1, marginLeft: 20, fontSize: 24 }}>
                        Vũ Trần {''}
                        <Text style={{ flex: 1, marginLeft: 20, fontSize: 24, fontWeight: 'bold' }}>
                            Minh
                    </Text>
                    </Text>
                    <Text style={{ marginRight: 20 }}>
                        1998
                    </Text>
                </View>
                <View style={{ height: metrics.screenHeight / 5 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderItem}
                        horizontal
                        keyExtractor={item => item.id}
                        extraData={DATA}
                    />
                </View>
                <View style={{ height: metrics.screenHeight / 8 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.wrapButton} onPress={()=> navigation.navigate('Payment')}>
                            <Image source={images.business} style={styles.image} />
                            <Text style={styles.textButton}>
                                Thanh Toán
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}>
                            <Image source={images.eye} style={styles.image} />
                            <Text style={styles.textButton}>
                                Lịch Khám
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}>
                            <Image source={images.eye} style={styles.image} />
                            <Text style={styles.textButton}>
                                Thông tin thẻ
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.eye} style={styles.image} />
                            <Text style={styles.textButton}>
                                Hồ sơ
                    </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                        Lịch khám sắp đến
                    </Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderRecord}
                        keyExtractor={item => item.id}
                        extraData={DATA}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapContainer: { flex: 1, backgroundColor: 'white' },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    wrapInfo: { flexDirection: 'row', justifyContent: 'space-between' },
    icon: {height: 25, width: 25},
    image: { height: 40, width: 40, tintColor: 'blue' },
    wrapButton: { alignItems: 'center', justifyContent: 'center', marginRight: metrics.screenWidth / 15 },
    textButton: { color: 'black', flex: 1, marginTop: 10 },
    wrapAvatar: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', justifyContent: 'space-between' }

});
