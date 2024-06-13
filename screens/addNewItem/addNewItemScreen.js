import React, { useState } from "react";
import { View, FlatList, ScrollView, Dimensions, TextInput, TouchableOpacity, StyleSheet, Text, Platform } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheet } from '@rneui/themed';
import { Menu, MenuItem } from 'react-native-material-menu';
import MyStatusBar from "../../components/myStatusBar";

const { width } = Dimensions.get('window');

const categoryList = ['Fast Food', 'Starter', 'Main Course', 'Dessert'];

const foodTypeList = ['Veg', 'Non Veg'];

const AddNewItemScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showChangeCategoryImageSheet: false,
        foodName: null,
        selectedItemCategory: null,
        itemPrice: null,
        offerPrice: null,
        selectedFoodType: null,
        specification1Value: null,
        specification1Amount: null,
        specification2Value: null,
        specification2Amount: null,
        specification3Value: null,
        specification3Amount: null,
        description: null,
        showCategoryOptions: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showChangeCategoryImageSheet,
        foodName,
        selectedItemCategory,
        itemPrice,
        offerPrice,
        selectedFoodType,
        specification1Value,
        specification1Amount,
        specification2Value,
        specification2Amount,
        specification3Value,
        specification3Amount,
        description,
        showCategoryOptions,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                    {uploadCategoryImageInfo()}
                    {itemNameInfo()}
                    {itemCategoryInfo()}
                    {itemPriceAndOfferPriceInfo()}
                    {foodTypeInfo()}
                    {specifictionsInfo()}
                    {descriptionInfo()}
                    {cancelAndSaveButton()}
                </ScrollView>
            </View>
            {changeCategoryImageBottomSheet()}
        </View>
    )

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

    function descriptionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Description
                </Text>
                <TextInput
                    placeholder="Write Some Description About Item..."
                    placeholderTextColor={Colors.grayColor}
                    value={description}
                    onChangeText={(value) => updateState({ description: value })}
                    multiline
                    numberOfLines={5}
                    style={{
                        ...styles.textFieldWrapStyle, height: Platform.OS == 'ios' ? 100 : null,
                        paddingTop: Platform.OS == 'ios' ? Sizes.fixPadding : null
                    }}
                    textAlignVertical="top"
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
            </View>
        )
    }

    function specifictionsInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
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
                    placeholder={"Extra Veggies"}
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...Fonts.grayColor14Medium, }}>
                        $
                    </Text>
                    <TextInput
                        placeholder="1.50"
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
                    <Text style={{ ...Fonts.grayColor14Medium, }}>
                        $
                    </Text>
                    <TextInput
                        placeholder="2.00"
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
                    placeholder={"Extra Cheese"}
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.grayColor14Medium, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...Fonts.grayColor14Medium, }}>
                        $
                    </Text>
                    <TextInput
                        placeholder="3.00"
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

    function foodTypeInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedFoodType: item })}
                style={{
                    backgroundColor: selectedFoodType == item ? Colors.primaryColor : Colors.whiteColor,
                    ...styles.foodTypeWrapStyle,
                }}>
                <Text style={selectedFoodType == item ? { ...Fonts.whiteColor12SemiBold } : { ...Fonts.grayColor12Regular }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor14SemiBold }}>
                    Food Type
                </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={foodTypeList}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding - 8.0, paddingBottom: Sizes.fixPadding - 8.0, }}
                />
            </View>
        )
    }

    function itemPriceAndOfferPriceInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 110.0, marginRight: Sizes.fixPadding * 2.0, }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Item Price
                    </Text>
                    <TextInput
                        value={itemPrice}
                        onChangeText={(value) => updateState({ itemPrice: value })}
                        keyboardType="numeric"
                        placeholder="eg. $6.00"
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...styles.textFieldWrapStyle }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
                <View style={{ width: 110.0, }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Offer Price
                    </Text>
                    <TextInput
                        value={offerPrice}
                        onChangeText={(value) => updateState({ offerPrice: value })}
                        keyboardType="numeric"
                        placeholder="eg. $5.00"
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...styles.textFieldWrapStyle }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
            </View >
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
                                {selectedItemCategory
                                    ?
                                    selectedItemCategory
                                    :
                                    'eg. Fast Food'
                                }
                            </Text>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                color={Colors.grayColor}
                                size={20}
                            />
                        </TouchableOpacity>
                    }
                    onRequestClose={() => updateState({ showCategoryOptions: false })}
                >
                    <View style={{ width: width - 50 }}>
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
                    placeholder="eg. Sandwich"
                    placeholderTextColor={Colors.grayColor}
                    value={foodName}
                    onChangeText={(text) => updateState({ foodName: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldWrapStyle}
                    cursorColor={Colors.primaryColor}
                />
            </View>
        )
    }

    function changeCategoryImageBottomSheet() {
        return (
            <BottomSheet
                isVisible={showChangeCategoryImageSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
                onBackdropPress={() => { updateState({ showChangeCategoryImageSheet: false }) }}
                scrollViewProps={{ scrollEnabled: false }}
            >
                <View style={styles.bottomSheetStyle}>
                    <Text style={{ ...Fonts.blackColor14SemiBold, textAlign: 'center', marginBottom: Sizes.fixPadding * 2.0 }}>
                        Choose Option
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ showChangeCategoryImageSheet: false })}
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
                        activeOpacity={0.9}
                        onPress={() => updateState({ showChangeCategoryImageSheet: false })}
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

    function uploadCategoryImageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Upload Category Image
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showChangeCategoryImageSheet: true })}
                    style={styles.addCategoryImageWrapStyle}
                >
                    <MaterialIcons
                        name="add-a-photo"
                        color={Colors.blackColor}
                        size={20}
                    />
                </TouchableOpacity>
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
                    Add New Item
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
    addCategoryImageWrapStyle: {
        marginTop: Sizes.fixPadding,
        width: width * 0.18,
        height: width * 0.18,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        elevation: 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding * 2.0,
        ...CommonStyles.shadow
    },
    bottomSheetStyle: {
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding + 5.0,
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
        paddingVertical: Sizes.fixPadding + 2.0,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        ...CommonStyles.shadow
    },
    foodTypeWrapStyle: {
        paddingVertical: Sizes.fixPadding + 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        elevation: 2.0,
        width: 110.0,
        marginRight: Sizes.fixPadding * 2.0,
        ...CommonStyles.shadow
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
    cancelAndSaveButtonWrapStyle: {
        marginVertical: Sizes.fixPadding * 3.5,
        marginHorizontal: Sizes.fixPadding * 7.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancelAndSaveButtonStyle: {
        flex: 1,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center', justifyContent: 'center',
    },
});

export default AddNewItemScreen;