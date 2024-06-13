import React, { useState } from "react";
import { Dimensions, View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";

const { width } = Dimensions.get('window');

const dailyOffersList = [
    {
        id: '1',
        foodImage: require('../../assets/images/daily_offers/offer1.png'),
        offerTitle: 'South Indian Thali - Veg',
        offerDescription: '2 Vegitables, Rasam Sambhar, 4 pooris, Rice Aplan, Pickle, Curd & Dessert',
        offerPrice: 26.00,
        itemPrice: 29.60,
        isOn: true,
    },
    {
        id: '2',
        foodImage: require('../../assets/images/daily_offers/offer2.png'),
        offerTitle: 'Cheese Naan With Gravy',
        offerDescription: 'Gravy, 2 Naan, Pickle, Raita, Salad & Papad',
        offerPrice: 23.60,
        itemPrice: 25.60,
        isOn: false,
    },
    {
        id: '3',
        foodImage: require('../../assets/images/daily_offers/offer3.png'),
        offerTitle: 'Butterscotch shake',
        offerDescription: `80 ml of glass and\n2 cup cakes`,
        offerPrice: 12.00,
        itemPrice: 15.60,
        isOn: true,
    },
    {
        id: '4',
        foodImage: require('../../assets/images/daily_offers/offer4.png'),
        offerTitle: 'Special Indian Meale',
        offerDescription: '2 Vegetables Rise, Dal Makhani, 3 Roti, Curd, Salad & Papad',
        offerPrice: 15.99,
        itemPrice: 18.99,
        isOn: true,
    },
    {
        id: '5',
        foodImage: require('../../assets/images/daily_offers/offer5.png'),
        offerTitle: 'Fast Food',
        offerDescription: 'Burger S- 1, Sandwich S- 1,Manchurian half',
        offerPrice: 12.00,
        itemPrice: 15.60,
        isOn: false,
    },
];

const DailyOffersScreen = ({ navigation }) => {

    const [dailyOffersData, setdailyOffersData] = useState(dailyOffersList)

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {dailyOffers()}
            </View>
        </View>
    )

    function updateDailyOffers({ id, offerMode }) {
        const newList = dailyOffersData.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, isOn: offerMode };
                return updatedItem;
            }
            return item;
        });
        setdailyOffersData(newList)
    }

    function dailyOffers() {
        const renderItem = ({ item }) => (
            <View style={styles.dailyOffersWrapStyle}>
                <Text style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ ...Fonts.grayColor13Medium, textDecorationLine: 'line-through' }}>
                        $29.60
                    </Text>
                    <Text style={{ ...Fonts.primaryColor13Medium }}>
                        { } $26.00
                    </Text>
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={item.foodImage}
                        style={{ width: width * 0.18, height: width * 0.18, borderRadius: Sizes.fixPadding - 5.0, }}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding, flex: 1 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                            {item.offerTitle}
                        </Text>
                        <Text numberOfLines={2} style={{ ...Fonts.grayColor11Regular }}>
                            {item.offerDescription}
                        </Text>
                    </View>
                </View>

                <View style={styles.offOnButtonWrapStyle}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateDailyOffers({ id: item.id, offerMode: false })}
                        style={{
                            ...styles.offOnButtonStyle,
                            backgroundColor: item.isOn ? Colors.whiteColor : Colors.primaryColor,
                        }}
                    >
                        <Text style={item.isOn ? { ...Fonts.primaryColor11SemiBold } : { ...Fonts.whiteColor11SemiBold }}>
                            OFF
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateDailyOffers({ id: item.id, offerMode: true })}
                        style={{
                            ...styles.offOnButtonStyle,
                            backgroundColor: item.isOn ? Colors.primaryColor : Colors.whiteColor,
                        }}
                    >
                        <Text style={item.isOn ? { ...Fonts.whiteColor11SemiBold } : { ...Fonts.primaryColor11SemiBold }}>
                            ON
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        return (
            <FlatList
                data={dailyOffersData}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding - 8.0, paddingBottom: Sizes.fixPadding, }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    color={Colors.blackColor}
                    size={22}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, flex: 1, ...Fonts.blackColor18SemiBold }}>
                    Daily Offers
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    offOnButtonStyle: {
        paddingVertical: Sizes.fixPadding - 7.0,
        width: 35.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    offOnButtonWrapStyle: {
        flexDirection: 'row',
        borderRadius: Sizes.fixPadding - 7.0,
        alignSelf: 'flex-end',
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        overflow: 'hidden'
    },
    dailyOffersWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        ...CommonStyles.shadow
    },
});

export default DailyOffersScreen;