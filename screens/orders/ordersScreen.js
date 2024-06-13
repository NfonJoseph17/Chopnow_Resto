import React, { useState } from "react";
import { View, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import { Menu, MenuItem } from 'react-native-material-menu';

const { width } = Dimensions.get('window');

const dialogOrderItemsList = [
    {
        id: '1',
        foodName: 'Veg Sandwich',
        qty: 1,
        totalAmount: 6.00,
    },
    {
        id: '2',
        foodName: 'Veg Frankie',
        qty: 1,
        totalAmount: 10.00,
    },
    {
        id: '3',
        foodName: 'Margherite Pizza',
        qty: 1,
        totalAmount: 12.00,
    },
];

const newOrdersList = [
    {
        id: '1',
        orderGiverImage: require('../../assets/images/users/user5.png'),
        orderGiverName: 'Samantha John',
        orderDate: 'Today',
        orderTime: '12:05 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        note: 'Hi, please pack green sauce in my order and please tell your delivery boy that he have to come on 2nd floor because i\'m not at home.'
    },
    {
        id: '2',
        orderGiverImage: require('../../assets/images/users/user6.png'),
        orderGiverName: 'Krish Doe',
        orderDate: 'Today',
        orderTime: '12:01 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        note: 'Hi, please pack green sauce in my order and please tell your delivery boy that he have to come on 2nd floor because i\'m not at home.'
    }
];

const orderStatsList = ['Order Dispatched', 'Order Preparing'];

const ongoingOrdersList = [
    {
        id: '1',
        orderGiverImage: require('../../assets/images/users/user5.png'),
        orderGiverName: 'Samantha John',
        orderDate: 'Today',
        orderTime: '12:05 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: orderStatsList[0],
    },
    {
        id: '2',
        orderGiverImage: require('../../assets/images/users/user6.png'),
        orderGiverName: 'Krish Doe',
        orderDate: 'Today',
        orderTime: '12:01 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: orderStatsList[1],
    },
    {
        id: '3',
        orderGiverImage: require('../../assets/images/users/user5.png'),
        orderGiverName: 'Samantha John',
        orderDate: 'Today',
        orderTime: '12:05 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: orderStatsList[0],
    },
];

const pastOrdersList = [
    {
        id: '1',
        orderGiverImage: require('../../assets/images/users/user5.png'),
        orderGiverName: 'Samantha John',
        orderDate: 'Today',
        orderTime: '12:05 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: 'delivered',
    },
    {
        id: '2',
        orderGiverImage: require('../../assets/images/users/user6.png'),
        orderGiverName: 'Krish Doe',
        orderDate: 'Today',
        orderTime: '12:01 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: 'cancelled',
    },
    {
        id: '3',
        orderGiverImage: require('../../assets/images/users/user5.png'),
        orderGiverName: 'Samantha John',
        orderDate: 'Today',
        orderTime: '12:05 am',
        orderId: 'ACR123654',
        totalPayment: 42.00,
        orderItemsList: [
            {
                id: 'i1',
                foodName: 'Veg Sandwich',
                qty: 1,
                totalAmount: 6.00,
            },
            {
                id: 'i2',
                foodName: 'Veg Frankie',
                qty: 2,
                totalAmount: 20.00,
            },
            {
                id: 'i3',
                foodName: 'Margherite Pizza',
                qty: 1,
                totalAmount: 12.00,
            },
        ],
        orderStatus: 'delivered',
    },
];

const OrdersScreen = ({ navigation }) => {

    const [state, setState] = useState({
        currentSelectedTabIndex: 1,
        showNewOrderDialog: false,
        showOngoingOrderDialog: false,
        showPastOrderDialog: false,
        showStatusOptions: true,
        selectedOrderId: null,
        ongoingOrdersData: ongoingOrdersList,
        showDialogStatusOption: false,
        selectedOrderStatus: null,
        selectedPastOrderStatus: null,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentSelectedTabIndex,
        showNewOrderDialog,
        showOngoingOrderDialog,
        showPastOrderDialog,
        showStatusOptions,
        selectedOrderId,
        ongoingOrdersData,
        showDialogStatusOption,
        selectedOrderStatus,
        selectedPastOrderStatus,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <View style={{ flex: 1 }}>
                {header()}
                {ordersTab()}
                {
                    currentSelectedTabIndex == 1
                        ?
                        newOrders()
                        :
                        currentSelectedTabIndex == 2
                            ?
                            ongoingOrders()
                            :
                            pastOrders()
                }
            </View>
            {newOrderDialog()}
            {ongoingOrderDialog()}
            {pastOrderDialog()}
        </View>
    )

    function pastOrderDialog() {
        return (
            <Dialog.Container
                visible={showPastOrderDialog}
                contentStyle={styles.orderDialogWrapStyle}
                headerStyle={{ margin: 0.0, padding: 0.0, }}
                onBackdropPress={() => updateState({ showPastOrderDialog: false })}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>

                    <View style={styles.orderInfoWrapStyle}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require('../../assets/images/users/user5.png')}
                                style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                            />
                            <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                                <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                    Samantha John
                                </Text>
                                <Text style={{ ...Fonts.blackColor11Medium }}>
                                    Today at 12:05 am
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Order Id: ACR123654
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Total Payment: $42.00
                            </Text>
                        </View>
                    </View>

                    <View style={{ margin: Sizes.fixPadding, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="phone"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                (+91) 1234567890
                            </Text>
                        </View>

                        <View style={{ marginVertical: Sizes.fixPadding - 2.0, flexDirection: 'row', }}>
                            <MaterialIcons
                                name="location-on"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                {`B 441, Old city town, Leminton street\nNear City Part, Washington DC,\nUnites States Of America`}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="email"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                johnsamantha@gmail.com
                            </Text>
                        </View>

                        {divider()}

                        <Text>
                            <Text style={{ ...Fonts.grayColor8SemiBold }}>
                                Note: { }
                            </Text>
                            <Text style={{ ...Fonts.grayColor8Medium }}>
                                Hi, please pack green sauce in my order and please tell your delivery boy that he have to come on 2nd floor because i'm not at home.
                            </Text>
                        </Text>

                        <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding + 5.0, }} />

                        <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                            <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                                Order Items
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                    Qnt.
                                </Text>
                                <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                    Amount
                                </Text>
                            </View>
                        </View>

                        {
                            dialogOrderItemsList.map((orderItem) => (
                                <View
                                    key={`${orderItem.id}`}
                                    style={styles.orderItemInfoWrapStyle}>
                                    <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                        {orderItem.foodName}
                                    </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                            {orderItem.qty}
                                        </Text>
                                        <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                            {`$`}{orderItem.totalAmount.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                TotalAmount
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium, }}>
                                $38.00
                            </Text>
                        </View>

                        <View style={styles.serviceTaxInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Service Tax:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $2.50
                            </Text>
                        </View>

                        <View style={styles.deliveryChargeInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Delivery Charge:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $1.50
                            </Text>
                        </View>

                        <View style={{ marginTop: Sizes.fixPadding, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...Fonts.blackColor13SemiBold }}>
                                Order Status:
                            </Text>
                            <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.primaryColor12SemiBold }}>
                                {selectedPastOrderStatus == 'delivered'
                                    ?
                                    'Order Delivered'
                                    :
                                    'Order Cancel By User'
                                }
                            </Text>
                        </View>

                    </View>
                </View>
            </Dialog.Container>
        )
    }

    function pastOrders() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedPastOrderStatus: item.orderStatus, showPastOrderDialog: true, })}
                style={styles.newOrdersWrapStyle}
            >
                <View style={styles.orderInfoWrapStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={item.orderGiverImage}
                            style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                        />
                        <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                {item.orderGiverName}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                {item.orderDate} at {item.orderTime}
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Order Id: {item.orderId}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Total Payment: {`$`}{item.totalPayment.toFixed(2)}
                        </Text>
                    </View>
                </View>

                <View style={{ paddingBottom: Sizes.fixPadding + 5.0, paddingHorizontal: Sizes.fixPadding, }}>
                    <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                        <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                            Order Items
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                Qnt.
                            </Text>
                            <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                Amount
                            </Text>
                        </View>
                    </View>

                    {
                        item.orderItemsList.map((orderItem) => (
                            <View
                                key={`${orderItem.id}`}
                                style={styles.orderItemInfoWrapStyle}>
                                <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                    {orderItem.foodName}
                                </Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                        {orderItem.qty}
                                    </Text>
                                    <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                        {`$`}{orderItem.totalAmount.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            TotalAmount
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium, }}>
                            {`$`}{item.orderItemsList.reduce((s, { totalAmount }) => s + totalAmount, 0).toFixed(2)}
                        </Text>
                    </View>

                    <View style={styles.serviceTaxInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Service Tax:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $2.50
                        </Text>
                    </View>

                    <View style={styles.deliveryChargeInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Delivery Charge:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $1.50
                        </Text>
                    </View>

                    <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0, }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...Fonts.blackColor13SemiBold }}>
                                Order Status:
                            </Text>
                            <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...item.orderStatus == 'delivered' ? { ...Fonts.primaryColor12SemiBold } : { ...Fonts.grayColor12SemiBold } }}>
                                {item.orderStatus == 'delivered'
                                    ?
                                    'Order Delivered'
                                    :
                                    'Order Cancelled'
                                }
                            </Text>
                        </View>

                        <View style={{ ...styles.listAndPhoneIconWrapStyle }}>
                            <Image
                                source={require('../../assets/images/icons/order_detail.png')}
                                style={{ width: 16.0, height: 16.0, resizeMode: 'contain' }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={pastOrdersList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding * 7.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function ongoingOrderDialog() {
        return (
            <Dialog.Container
                visible={showOngoingOrderDialog}
                contentStyle={styles.orderDialogWrapStyle}
                headerStyle={{ margin: 0.0, padding: 0.0, }}
                onBackdropPress={() => updateState({ showOngoingOrderDialog: false })}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>

                    <View style={styles.orderInfoWrapStyle}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require('../../assets/images/users/user5.png')}
                                style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                            />
                            <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                                <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                    Samantha John
                                </Text>
                                <Text style={{ ...Fonts.blackColor11Medium }}>
                                    Today at 12:05 am
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Order Id: ACR123654
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Total Payment: $42.00
                            </Text>
                        </View>
                    </View>

                    <View style={{ margin: Sizes.fixPadding, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="phone"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                (+91) 1234567890
                            </Text>
                        </View>

                        <View style={{ marginVertical: Sizes.fixPadding - 2.0, flexDirection: 'row', }}>
                            <MaterialIcons
                                name="location-on"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                {`B 441, Old city town, Leminton street\nNear City Part, Washington DC,\nUnites States Of America`}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="email"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                johnsamantha@gmail.com
                            </Text>
                        </View>

                        {divider()}

                        <Text>
                            <Text style={{ ...Fonts.grayColor8SemiBold }}>
                                Note: { }
                            </Text>
                            <Text style={{ ...Fonts.grayColor8Medium }}>
                                Hi, please pack green sauce in my order and please tell your delivery boy that he have to come on 2nd floor because i'm not at home.
                            </Text>
                        </Text>

                        <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding + 5.0, }} />

                        <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                            <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                                Order Items
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                    Qnt.
                                </Text>
                                <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                    Amount
                                </Text>
                            </View>
                        </View>

                        {
                            dialogOrderItemsList.map((orderItem) => (
                                <View
                                    key={`${orderItem.id}`}
                                    style={styles.orderItemInfoWrapStyle}>
                                    <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                        {orderItem.foodName}
                                    </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                            {orderItem.qty}
                                        </Text>
                                        <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                            {`$`}{orderItem.totalAmount.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                TotalAmount
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium, }}>
                                $38.00
                            </Text>
                        </View>

                        <View style={styles.serviceTaxInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Service Tax:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $2.50
                            </Text>
                        </View>

                        <View style={styles.deliveryChargeInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Delivery Charge:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $1.50
                            </Text>
                        </View>

                        <View style={styles.dialogOrderStatusAndCancelButtonWrapStyle}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ flex: 1, ...Fonts.blackColor13SemiBold }}>
                                    Order Status:
                                </Text>

                                <Menu
                                    visible={showDialogStatusOption}
                                    anchor={
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => updateState({ showDialogStatusOption: true })}
                                            style={{ marginLeft: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ ...Fonts.primaryColor12SemiBold }}>
                                                {selectedOrderStatus}
                                            </Text>
                                            <MaterialIcons
                                                name="keyboard-arrow-down"
                                                color={Colors.primaryColor}
                                                size={20}
                                                style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                                            />
                                        </TouchableOpacity>
                                    }
                                    onRequestClose={() => { updateState({ showDialogStatusOption: false }) }}
                                >
                                    <View>
                                        {
                                            orderStatsList.map((status, index) => (
                                                <Text
                                                    key={`${index}`}
                                                    style={{ ...Fonts.primaryColor12SemiBold,marginHorizontal:Sizes.fixPadding*2.0, marginVertical: Sizes.fixPadding }}
                                                    onPress={() => {
                                                        updateState({ selectedOrderStatus: status, showDialogStatusOption: false })
                                                    }}
                                                >
                                                    {status}
                                                </Text>
                                            ))
                                        }
                                    </View>
                                </Menu>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => updateState({ showOngoingOrderDialog: false })}
                                style={styles.cancelOrderButtonStyle}
                            >
                                <Text style={{ ...Fonts.primaryColor12Medium }}>
                                    Cancel Order
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Dialog.Container>
        )
    }

    function updateOngoingOrder({ id, selectedStatus }) {
        const newList = ongoingOrdersData.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, orderStatus: selectedStatus };
                return updatedItem;
            }
            return item;
        });
        updateState({ ongoingOrdersData: newList })
    }

    function ongoingOrders() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedOrderStatus: item.orderStatus, showOngoingOrderDialog: true, })}
                style={styles.newOrdersWrapStyle}
            >
                <View style={styles.orderInfoWrapStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={item.orderGiverImage}
                            style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                        />
                        <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                {item.orderGiverName}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                {item.orderDate} at {item.orderTime}
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Order Id: {item.orderId}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Total Payment: {`$`}{item.totalPayment.toFixed(2)}
                        </Text>
                    </View>
                </View>

                <View style={{ paddingBottom: Sizes.fixPadding + 5.0, paddingHorizontal: Sizes.fixPadding, }}>
                    <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                        <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                            Order Items
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                Qnt.
                            </Text>
                            <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                Amount
                            </Text>
                        </View>
                    </View>

                    {
                        item.orderItemsList.map((orderItem) => (
                            <View
                                key={`${orderItem.id}`}
                                style={styles.orderItemInfoWrapStyle}>
                                <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                    {orderItem.foodName}
                                </Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                        {orderItem.qty}
                                    </Text>
                                    <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                        {`$`}{orderItem.totalAmount.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            TotalAmount
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium, }}>
                            {`$`}{item.orderItemsList.reduce((s, { totalAmount }) => s + totalAmount, 0).toFixed(2)}
                        </Text>
                    </View>

                    <View style={styles.serviceTaxInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Service Tax:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $2.50
                        </Text>
                    </View>

                    <View style={styles.deliveryChargeInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Delivery Charge:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $1.50
                        </Text>
                    </View>

                    <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0, }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...Fonts.blackColor13SemiBold }}>
                                Order Status:
                            </Text>

                            <Menu
                                visible={selectedOrderId == item.id ? showStatusOptions : false}
                                anchor={
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => updateState({ selectedOrderId: item.id, showStatusOptions: true })}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ ...Fonts.primaryColor12SemiBold }}>
                                            {item.orderStatus}
                                        </Text>
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            color={Colors.primaryColor}
                                            size={20}
                                            style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                                        />
                                    </TouchableOpacity>
                                }
                                onRequestClose={() => updateState({ showStatusOptions: false })}
                            >
                                {
                                    orderStatsList.map((status, index) => (
                                        <MenuItem
                                            key={`${index}`}
                                            textStyle={{ ...Fonts.primaryColor12SemiBold }}
                                            onPress={() => {
                                                updateOngoingOrder({ id: item.id, selectedStatus: status })
                                                updateState({ showStatusOptions: false })
                                            }}
                                        >
                                            {status}
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        </View>

                        <View style={{ ...styles.listAndPhoneIconWrapStyle }}>
                            <Image
                                source={require('../../assets/images/icons/order_detail.png')}
                                style={{ width: 16.0, height: 16.0, resizeMode: 'contain' }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={ongoingOrdersData}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding * 7.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function newOrderDialog() {
        return (
            <Dialog.Container
                visible={showNewOrderDialog}
                contentStyle={styles.orderDialogWrapStyle}
                headerStyle={{ margin: 0.0, padding: 0.0, }}
                onBackdropPress={() => updateState({ showNewOrderDialog: false })}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>

                    <View style={styles.orderInfoWrapStyle}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require('../../assets/images/users/user5.png')}
                                style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                            />
                            <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                                <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                    Samantha John
                                </Text>
                                <Text style={{ ...Fonts.blackColor11Medium }}>
                                    Today at 12:05 am
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Order Id: ACR123654
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                Total Payment: $42.00
                            </Text>
                        </View>
                    </View>

                    <View style={{ margin: Sizes.fixPadding, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="phone"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                (+91) 1234567890
                            </Text>
                        </View>

                        <View style={{ marginVertical: Sizes.fixPadding - 2.0, flexDirection: 'row', }}>
                            <MaterialIcons
                                name="location-on"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                {`B 441, Old city town, Leminton street\nNear City Part, Washington DC,\nUnites States Of America`}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name="email"
                                color={Colors.blackColor}
                                size={16}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor11Medium }}>
                                johnsamantha@gmail.com
                            </Text>
                        </View>

                        {divider()}

                        <Text>
                            <Text style={{ ...Fonts.grayColor8SemiBold }}>
                                Note: { }
                            </Text>
                            <Text style={{ ...Fonts.grayColor8Medium }}>
                                Hi, please pack green sauce in my order and please tell your delivery boy that he have to come on 2nd floor because i'm not at home.
                            </Text>
                        </Text>

                        <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding + 5.0, }} />

                        <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                            <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                                Order Items
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                    Qnt.
                                </Text>
                                <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                    Amount
                                </Text>
                            </View>
                        </View>

                        {
                            dialogOrderItemsList.map((orderItem) => (
                                <View
                                    key={`${orderItem.id}`}
                                    style={styles.orderItemInfoWrapStyle}>
                                    <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                        {orderItem.foodName}
                                    </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                            {orderItem.qty}
                                        </Text>
                                        <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                            {`$`}{orderItem.totalAmount.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                TotalAmount
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium, }}>
                                $38.00
                            </Text>
                        </View>

                        <View style={styles.serviceTaxInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Service Tax:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $2.50
                            </Text>
                        </View>

                        <View style={styles.deliveryChargeInfoWrapStyle}>
                            <Text style={{ ...Fonts.grayColor11Medium }}>
                                Delivery Charge:{` `}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                $1.50
                            </Text>
                        </View>

                        <View style={{ marginBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { updateState({ showNewOrderDialog: false }) }}
                                style={{ ...styles.cancelAndAcceptOrderButtonStyle, marginRight: Sizes.fixPadding, }}
                            >
                                <Text style={{ ...Fonts.primaryColor12Medium }}>
                                    Cancel Order
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { updateState({ showNewOrderDialog: false }) }}
                                style={{ ...styles.cancelAndAcceptOrderButtonStyle, backgroundColor: Colors.primaryColor, }}
                            >
                                <Text style={{ ...Fonts.whiteColor12Medium }}>
                                    Accept Order
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Dialog.Container>
        )
    }

    function divider() {
        return (
            <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0, }} />
        )
    }

    function newOrders() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ showNewOrderDialog: true })}
                style={styles.newOrdersWrapStyle}
            >
                <View style={styles.orderInfoWrapStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={item.orderGiverImage}
                            style={{ width: 45.0, height: 45.0, borderRadius: 25.0, }}
                        />
                        <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold }}>
                                {item.orderGiverName}
                            </Text>
                            <Text style={{ ...Fonts.blackColor11Medium }}>
                                {item.orderDate} at {item.orderTime}
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Order Id: {item.orderId}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            Total Payment: {`$`}{item.totalPayment.toFixed(2)}
                        </Text>
                    </View>
                </View>

                <View style={{ paddingBottom: Sizes.fixPadding + 5.0, paddingHorizontal: Sizes.fixPadding, }}>
                    <View style={styles.orderItemsWithQtyAndAmountTitalWrapStyle}>
                        <Text style={{ width: width / 2.2, ...Fonts.blackColor13SemiBold }}>
                            Order Items
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', width: 50.0, ...Fonts.blackColor13SemiBold }}>
                                Qnt.
                            </Text>
                            <Text style={{ textAlign: 'right', width: 70.0, ...Fonts.blackColor13SemiBold }}>
                                Amount
                            </Text>
                        </View>
                    </View>

                    {
                        item.orderItemsList.map((orderItem) => (
                            <View
                                key={`${orderItem.id}`}
                                style={styles.orderItemInfoWrapStyle}>
                                <Text numberOfLines={1} style={{ width: width / 2.2, ...Fonts.blackColor11Medium }}>
                                    {orderItem.foodName}
                                </Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: 50.0, textAlign: 'center', ...Fonts.blackColor11Medium }}>
                                        {orderItem.qty}
                                    </Text>
                                    <Text style={{ width: 70.0, textAlign: 'right', ...Fonts.blackColor11Medium }}>
                                        {`$`}{orderItem.totalAmount.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            TotalAmount
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium, }}>
                            {`$`}{item.orderItemsList.reduce((s, { totalAmount }) => s + totalAmount, 0).toFixed(2)}
                        </Text>
                    </View>

                    <View style={styles.serviceTaxInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Service Tax:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $2.50
                        </Text>
                    </View>

                    <View style={styles.deliveryChargeInfoWrapStyle}>
                        <Text style={{ ...Fonts.grayColor11Medium }}>
                            Delivery Charge:{` `}
                        </Text>
                        <Text style={{ ...Fonts.blackColor11Medium }}>
                            $1.50
                        </Text>
                    </View>

                    <View style={{ backgroundColor: Colors.grayColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0, }} />

                    <Text>
                        <Text style={{ ...Fonts.grayColor8SemiBold }}>
                            Note: { }
                        </Text>
                        <Text style={{ ...Fonts.grayColor8Medium }}>
                            {item.note}
                        </Text>
                    </Text>

                    <View style={styles.cancelAcceptAndCallAndListButtonWrapStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: Sizes.fixPadding, ...styles.listAndPhoneIconWrapStyle }}>
                                <Image
                                    source={require('../../assets/images/icons/order_detail.png')}
                                    style={{ width: 16.0, height: 16.0, resizeMode: 'contain' }}
                                />
                            </View>
                            <View style={styles.listAndPhoneIconWrapStyle}>
                                <MaterialIcons
                                    name="phone"
                                    color={Colors.blackColor}
                                    size={16}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { }}
                                style={{ ...styles.cancelAndAcceptOrderButtonStyle, marginRight: Sizes.fixPadding, }}
                            >
                                <Text style={{ ...Fonts.primaryColor12Medium }}>
                                    Cancel Order
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { }}
                                style={{ ...styles.cancelAndAcceptOrderButtonStyle, backgroundColor: Colors.primaryColor, }}
                            >
                                <Text style={{ ...Fonts.whiteColor12Medium }}>
                                    Accept Order
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={newOrdersList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding * 7.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function ordersTab() {
        return (
            <View style={styles.orderTabWrapStyle}>
                {orderTabOptions({ tabTitle: 'New Orders', index: 1, })}
                {orderTabOptions({ tabTitle: 'Ongoing Orders', index: 2, })}
                {orderTabOptions({ tabTitle: 'Past Orders', index: 3, })}
            </View>
        )
    }

    function orderTabOptions({ tabTitle, index }) {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ currentSelectedTabIndex: index })}
            >
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.blackColor14SemiBold }}>
                    {tabTitle}
                </Text>
                <View style={{ backgroundColor: currentSelectedTabIndex == index ? Colors.blackColor : 'transparent', height: 1.0, }} />
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                Orders
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    orderTabWrapStyle: {
        backgroundColor: '#DEE2EB',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding,
        justifyContent: 'space-between'
    },
    orderItemsWithQtyAndAmountTitalWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Sizes.fixPadding,
    },
    orderItemInfoWrapStyle: {
        marginBottom: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    serviceTaxInfoWrapStyle: {
        marginTop: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    deliveryChargeInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listAndPhoneIconWrapStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        elevation: 2.0,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        ...CommonStyles.shadow
    },
    cancelAndAcceptOrderButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        padding: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelAcceptAndCallAndListButtonWrapStyle: {
        marginTop: Sizes.fixPadding + 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    newOrdersWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
        elevation: 2.0,
        backgroundColor: Colors.whiteColor,
        marginBottom: Sizes.fixPadding * 2.0,
        ...CommonStyles.shadow
    },
    orderInfoWrapStyle: {
        backgroundColor: '#ECECEC',
        borderTopLeftRadius: Sizes.fixPadding,
        borderTopRightRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    orderDialogWrapStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 40,
        padding: 0.0,
    },
    cancelOrderButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        padding: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogOrderStatusAndCancelButtonWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});

export default OrdersScreen;