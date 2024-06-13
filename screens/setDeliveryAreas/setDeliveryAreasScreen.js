import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, TextInput, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import MyStatusBar from "../../components/myStatusBar";

const deliveryAreasList = [
    {
        id: '1',
        area: '2983 Heavener Court',
        isSelected: true,
    },
    {
        id: '2',
        area: '2372 Sunset Drive',
        isSelected: true,
    },
    {
        id: '3',
        area: '1098 Clarksburg Park Road',
        isSelected: false,
    },
    {
        id: '4',
        area: '536 Mandan Road',
        isSelected: true,
    },
    {
        id: '5',
        area: '4607 Abia Martin Drive',
        isSelected: true,
    },
];

const stateList = ['Gujarat', 'Maharastra', 'Rajasthan', 'Delhi', 'Kerala'];

const cityList = ['Surat', 'Mumbai', 'Pune', 'Jaipur', 'Agra'];

const SetDeliveryAreasScreen = ({ navigation }) => {

    const [state, setState] = useState({
        area: null,
        deliveryAreas: deliveryAreasList,
        showStateOptions: false,
        selectedState: null,
        selectedCity: null,
        showCityOptions: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        area,
        deliveryAreas,
        showStateOptions,
        selectedState,
        selectedCity,
        showCityOptions,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                >
                    {addNewAreaInfo()}
                    {deliveryAreasInfo()}
                </ScrollView>
            </View>
            {saveButton()}
        </View>
    )

    function saveButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.pop()}
                style={styles.saveButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Save
                </Text>
            </TouchableOpacity>
        )
    }

    function updateDeliveryAreas({ id }) {
        const newList = deliveryAreas.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, isSelected: !item.isSelected };
                return updatedItem;
            }
            return item;
        });
        updateState({ deliveryAreas: newList })
    }

    function deliveryAreasInfo() {
        return (
            <View>
                <View style={styles.deliveryAreaListTitleStyle}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Delivery Area List
                    </Text>
                </View>

                {
                    deliveryAreas.map((item) => (
                        <View
                            key={`${item.id}`}
                            style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => updateDeliveryAreas({ id: item.id })}
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <View style={{
                                    ...styles.checkBoxStyle,
                                    backgroundColor: item.isSelected ? Colors.primaryColor : Colors.bodyBackColor,
                                }}>
                                    {
                                        item.isSelected
                                            ?
                                            <MaterialIcons
                                                name="check"
                                                color={Colors.whiteColor}
                                                size={14}
                                            />
                                            :
                                            null
                                    }
                                </View>
                                <Text style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor12Medium }}>
                                    {item.area}
                                </Text>
                            </TouchableOpacity>
                            <View
                                style={{ backgroundColor: Colors.grayColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0, }}
                            />
                        </View>
                    ))
                }
            </View>
        )
    }

    function addNewAreaInfo() {
        return (
            <View>
                <View style={{
                    backgroundColor: '#DEE2EB',
                    paddingVertical: Sizes.fixPadding,
                    paddingHorizontal: Sizes.fixPadding * 2.0,
                }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Add New Area
                    </Text>
                </View>

                <View style={styles.stateAndCityInfoWrapStyle}>
                    <View style={{ flex: 1 }}>
                        <Menu
                            visible={showStateOptions}
                            anchor={
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => updateState({ showStateOptions: true })}
                                    style={styles.stateAndCityButtonStyle}
                                >
                                    <Text style={{ ...Fonts.primaryColor12SemiBold }}>
                                        {selectedState ? selectedState : 'Choose State'}
                                    </Text>
                                    <MaterialIcons
                                        name="keyboard-arrow-down"
                                        color={Colors.primaryColor}
                                        size={16}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                                    />
                                </TouchableOpacity>
                            }
                            onRequestClose={() => updateState({ showStateOptions: false })}
                        >
                            {
                                stateList.map((item, index) => (
                                    <MenuItem
                                        key={`${index}`}
                                        textStyle={{ ...Fonts.primaryColor12SemiBold }}
                                        onPress={() => {
                                            updateState({ selectedState: item, showStateOptions: false })
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Menu
                            visible={showCityOptions}
                            anchor={
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => updateState({ showCityOptions: true })}
                                    style={styles.stateAndCityButtonStyle}
                                >
                                    <Text style={{ ...Fonts.primaryColor12SemiBold }}>
                                        {selectedCity ? selectedCity : 'Choose City'}
                                    </Text>
                                    <MaterialIcons
                                        name="keyboard-arrow-down"
                                        color={Colors.primaryColor}
                                        size={16}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                                    />
                                </TouchableOpacity>
                            }
                            onRequestClose={() => updateState({ showCityOptions: false })}
                        >
                            {
                                cityList.map((item, index) => (
                                    <MenuItem
                                        key={`${index}`}
                                        textStyle={{ ...Fonts.primaryColor12SemiBold }}
                                        onPress={() => {
                                            updateState({ selectedCity: item, showCityOptions: false })
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </View>
                </View>

                <TextInput
                    placeholder="Enter area here..."
                    placeholderTextColor={Colors.grayColor}
                    style={styles.areaTextFieldStyle}
                    selectionColor={Colors.primaryColor}
                    value={area}
                    onChangeText={(value) => updateState({ area: value })}
                />

                <View style={styles.addAreaButtonStyle}>
                    <Text style={{ ...Fonts.whiteColor11SemiBold }}>
                        Add Area
                    </Text>
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
                    Set Delivery Area's
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
    stateAndCityInfoWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 3.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 4.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    stateAndCityButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding - 5.0,
    },
    addAreaButtonStyle: {
        backgroundColor: Colors.blackColor,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 2.0,
        paddingHorizontal: Sizes.fixPadding + 10.0,
        borderRadius: Sizes.fixPadding,
        alignSelf: 'flex-end',
        margin: Sizes.fixPadding * 2.0,
    },
    areaTextFieldStyle: {
        ...Fonts.blackColor11Medium,
        borderBottomColor: Colors.grayColor,
        borderBottomWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    checkBoxStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: Sizes.fixPadding - 8.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deliveryAreaListTitleStyle: {
        backgroundColor: '#DEE2EB',
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    saveButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding + 2.0,
        margin: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255, 66, 0, 0.3)',
        borderWidth: 1.0,
        elevation: 1.0,
        shadowColor: Colors.primaryColor,
    },
});

export default SetDeliveryAreasScreen;