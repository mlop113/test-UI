import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { metrics, images } from '../themes'
import { FlatList } from 'react-native-gesture-handler';
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


export function Card({ navigation }) {
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Text>
                    BV.Chợ Rẫy
            </Text>
                <Text style={{fontWeight: 'bold'}}>
                    38.700
            </Text>
                <Text>
                    8:00 24/03/2018
            </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.wrapContainer}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.back} style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.time} style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    TEKMEDI CARD
                </Text>
                <TouchableOpacity
                    style={{ width: metrics.screenWidth - 100, alignSelf: 'center', marginBottom: 30 }}
                >
                    <Image source={images.checked} style={{ height: 40, width: 40, alignSelf: 'flex-end' }}
                    />
                    <Image source={images.environment} style={{ height: 40, width: 40, alignSelf: 'flex-start' }}
                    />
                    <Image source={images.commerce} style={{ height: 40, width: 40, alignSelf: 'flex-end', marginRight: 20 }}

                    />
                    <Text>7290009127810</Text>
                </TouchableOpacity>
                <Text style={styles.categoryTitle}>
                    Lựa chọn
                </Text>
                <View style={{ height: metrics.screenHeight / 7 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                        <TouchableOpacity style={styles.wrapButton}>
                            <Image source={images.business} style={styles.image} />
                            <Text style={styles.text}>
                                Thông tin thẻ
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}>
                            <Image source={images.eye} style={styles.image} />
                            <Text style={styles.text}>
                                Giao dịch
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}>
                            <Image source={images.eye} style={styles.image} />
                            <Text style={styles.text}>
                                Thống kê
                        </Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <Text style={styles.categoryTitle}>
                    Giao dịch gần nhất
                </Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={DATA}
                />

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
    image: { height: 40, width: 40, tintColor: 'blue' },
    icon: { height: 24, width: 24 },
    header: { flexDirection: 'row', justifyContent: 'space-between' },
    title: { marginVertical: 36, fontWeight: 'bold', fontSize: 24, color: 'blue' },
    text: { color: 'black', flex: 1, marginTop: 10 },
    wrapButton: { alignItems: 'center', justifyContent: 'center' },
    itemContainer: { flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', paddingVertical: 5 },
    categoryTitle: { marginBottom: 20, fontWeight: 'bold', fontSize: 16 }
});
