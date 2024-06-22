import React, { useState } from "react";
import { View, FlatList, ScrollView, TextInput, TouchableOpacity, Dimensions, Image, StyleSheet, Text, Platform } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import { BottomSheet, Input } from '@rneui/themed';
import MyStatusBar from "../../components/myStatusBar";

const { width } = Dimensions.get('window');

const categoryList = ['Fast Food', 'Drinks'];

// const foodTypeList = ['Veg', 'Non Veg'];

const EditFoodItemScreen = ({ navigation, route }) => {

    const id = route.params.id;

    const [state, setState] = useState({
        foodName: 'Fried Rice',
        showCategoryOptions: false,
        selectedItemCategory: categoryList[0],
        itemPrice: '1000.0',
        // selectedFoodType: foodTypeList[0],
        specification1Value: null,
        specification1Amount: null,
        specification2Value: null,
        specification2Amount: null,
        specification3Value: null,
        specification3Amount: null,
        showChangeItemImageSheet: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        foodName,
        showCategoryOptions,
        selectedItemCategory,
        itemPrice,
        // selectedFoodType,
        specification1Value,
        specification1Amount,
        specification2Value,
        specification2Amount,
        specification3Value,
        specification3Amount,
        showChangeItemImageSheet,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                    {changeItemImageInfo()}
                    {itemNameInfo()}
                    {itemCategoryInfo()}
                    {itemPriceInfo()}
                    {/* {foodTypeInfo()} */}
                    {specifictionsInfo()}
                    {cancelAndSaveButton()}
                </ScrollView>
                {changeItemImageBottomSheet()}
            </View>
        </View>
    )

    function changeItemImageBottomSheet() {
        return (
            <BottomSheet
                isVisible={showChangeItemImageSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
                onBackdropPress={() => { updateState({ showChangeItemImageSheet: false }) }}
                scrollViewProps={{ scrollEnabled: false }}
            >
                <View style={styles.bottomSheetStyle}>
                    <Text style={{ ...Fonts.blackColor14SemiBold, textAlign: 'center', marginBottom: Sizes.fixPadding * 2.0 }}>
                        Choose Option
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { updateState({ showChangeItemImageSheet: false }) }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <MaterialIcons
                            name="camera-alt"
                            size={18}
                            color={Colors.blackColor}
                        />
                        <Text style={{ ...Fonts.blackColor13SemiBold, marginLeft: Sizes.fixPadding }}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { updateState({ showChangeItemImageSheet: false }) }}
                        style={{ flexDirection: 'row', marginTop: Sizes.fixPadding * 2.0 }}
                    >
                        <MaterialIcons name="photo-library" size={18} color={Colors.blackColor} />
                        <Text style={{ ...Fonts.blackColor13SemiBold, marginLeft: Sizes.fixPadding }}>
                            Select Photo From Gallery
                        </Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        )
    }

    function cancelAndSaveButton() {
        return (
            <View style={styles.cancelAndSaveButtonWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={{
                        ...styles.cancelAndSaveButtonStyle,
                        marginRight: Sizes.fixPadding - 2.0,
                    }}
                >
                    <Text style={{ ...Fonts.primaryColor15Bold }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={{
                        ...styles.cancelAndSaveButtonStyle,
                        marginLeft: Sizes.fixPadding - 2.0,
                        backgroundColor: Colors.primaryColor,
                    }}
                >
                    <Text style={{ ...Fonts.whiteColor15Bold }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function specifictionsInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor14SemiBold }}>
                    Add Specifications
                </Text>
                {specification1()}
                {specification2()}
                {specification3()}
            </View>
        )
    }

    function specification3() {
        return (
            <View style={styles.specificationWrapStyle}>
                <TextInput
                    value={specification3Value}
                    onChangeText={(value) => updateState({ specification3Value: value })}
                    placeholder={"Extra Vegitables"}
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                    
                    <TextInput
                        placeholder="500.0"
                        keyboardType='numeric'
                        value={specification3Amount}
                        onChangeText={(value) => updateState({ specification3Amount: value })}
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function specification2() {
        return (
            <View style={styles.specificationWrapStyle}>
                <TextInput
                    value={specification2Value}
                    onChangeText={(value) => updateState({ specification2Value: value })}
                    placeholder={"Extra Mayonnaise"}
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                    
                    <TextInput
                        placeholder="100.0"
                        keyboardType='numeric'
                        value={specification2Amount}
                        onChangeText={(value) => updateState({ specification2Amount: value })}
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function specification1() {
        return (
            <View style={styles.specificationWrapStyle}>
                <TextInput
                    value={specification1Value}
                    onChangeText={(value) => updateState({ specification1Value: value })}
                    placeholder={"Extra Chicken"}
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                    
                    <TextInput
                        placeholder="500.0"
                        keyboardType='numeric'
                        value={specification1Amount}
                        onChangeText={(value) => updateState({ specification1Amount: value })}
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    // function foodTypeInfo() {
    //     const renderItem = ({ item }) => (
    //         <TouchableOpacity
    //             activeOpacity={0.9}
    //             onPress={() => updateState({ selectedFoodType: item })}
    //             style={{
    //                 backgroundColor: selectedFoodType == item ? Colors.primaryColor : Colors.whiteColor,
    //                 ...styles.foodTypeWrapStyle,
    //             }}>
    //             <Text style={selectedFoodType == item ? { ...Fonts.whiteColor12SemiBold } : { ...Fonts.grayColor12Regular }}>
    //                 {item}
    //             </Text>
    //         </TouchableOpacity>
    //     )
    //     return (
    //         <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
    //             <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor14SemiBold }}>
    //                 Food Type
    //             </Text>
    //             <FlatList
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //                 data={foodTypeList}
    //                 keyExtractor={(item, index) => `${index}`}
    //                 renderItem={renderItem}
    //                 contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding - 8.0, paddingBottom: Sizes.fixPadding - 8.0, }}
    //             />
    //         </View>
    //     )
    // }

    function itemPriceInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Item Price
                </Text>
                <Input
                    selectionColor={Colors.primaryColor}
                    keyboardType='numeric'
                    value={itemPrice}
                    onChangeText={(text) => updateState({ itemPrice: text })}
                    
                    style={{ marginLeft: Sizes.fixPadding - 12.0, ...Fonts.grayColor14Medium, }}
                    inputContainerStyle={{
                        ...styles.priceFieldWrapStyle,
                        ...styles.textFieldWrapStyle
                    }}
                    containerStyle={{ height: 50.0, }}
                />
            </View>
        )
    }

    function itemCategoryInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Item Category
                </Text>
                <Menu
                    visible={showCategoryOptions}
                    anchor={
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => updateState({ showCategoryOptions: true })}
                            style={styles.itemCategoryWrapStyle}
                        >
                            <Text style={{ flex: 1, ...Fonts.grayColor14Medium }}>
                                {selectedItemCategory}
                            </Text>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                color={Colors.grayColor}
                                size={20}
                            />
                        </TouchableOpacity>
                    }
                >
                    <View style={{ width: width - 40 }}>
                        {
                            categoryList.map((item, index) => (
                                <MenuItem
                                    key={`${index}`}
                                    textStyle={{ ...Fonts.grayColor14Medium }}
                                    onPress={() => {
                                        updateState({ selectedItemCategory: item, showCategoryOptions: false })
                                    }}
                                >
                                    {item}
                                </MenuItem>
                            ))
                        }
                    </View>
                </Menu>
            </View>
        )
    }

    function itemNameInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Item Name
                </Text>
                <TextInput
                    value={foodName}
                    onChangeText={(text) => updateState({ foodName: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldWrapStyle}
                />
            </View>
        )
    }

    function changeItemImageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Change Item Image
                </Text>
                <View style={{ marginLeft: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding, }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ showChangeItemImageSheet: true })}
                        style={styles.itemImageWrapStyle}
                    >
                        <Image
                            source={require('../../assets/images/food/food18.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: Sizes.fixPadding - 5.0,
                            }}
                        />
                        <View style={styles.addIconWrapStyle}>
                            <MaterialIcons
                                name="add"
                                color={Colors.whiteColor}
                                size={15}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
                    Edit Item
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
    addIconWrapStyle: {
        backgroundColor: Colors.primaryColor,
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -5.0, right: -5.0,
    },
    itemImageWrapStyle: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: Sizes.fixPadding - 5.0,
        elevation: 4.0,
    },
    textFieldWrapStyle: {
        ...Fonts.grayColor14Medium,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        paddingVertical: Platform.OS == 'ios' ? Sizes.fixPadding + 2.0 : Sizes.fixPadding - 2.0,
        paddingHorizontal: Sizes.fixPadding,
        marginTop: Sizes.fixPadding,
        ...CommonStyles.shadow
    },
    itemCategoryWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
    },
    priceFieldWrapStyle: {
        marginLeft: Sizes.fixPadding - 15.0,
        width: '104%',
        height: 40.0,
        borderBottomWidth: 0.0
    },
    foodTypeWrapStyle: {
        paddingVertical: Sizes.fixPadding + 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        elevation: 2.0,
        width: 110.0,
        marginRight: Sizes.fixPadding * 2.0,
    },
    specificationWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Platform.OS == 'ios' ? Sizes.fixPadding + 2.0 : Sizes.fixPadding - 2.0,
        marginBottom: Sizes.fixPadding + 5.0,
        ...CommonStyles.shadow
    },
    cancelAndSaveButtonStyle: {
        flex: 1,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center', justifyContent: 'center',
    },
    cancelAndSaveButtonWrapStyle: {
        marginBottom: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 7.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomSheetStyle: {
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding + 5.0,
    },
});

export default EditFoodItemScreen;