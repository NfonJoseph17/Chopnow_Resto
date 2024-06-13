import React, { useState } from "react";
import { Dimensions, ScrollView, View, TouchableOpacity, TextInput, StyleSheet, Text, Platform } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import { BottomSheet } from '@rneui/themed';
import MyStatusBar from "../../components/myStatusBar";

const { width } = Dimensions.get('window');

const parentCategoryList = ['Fast Food', 'Starter', 'Main Course', 'Dessert'];

const AddCategoryScreen = ({ navigation }) => {

    const [state, setState] = useState({
        categoryName: null,
        selectedParentCategory: null,
        showParentCategoryOptions: false,
        showChangeCategoryImageSheet: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        categoryName,
        selectedParentCategory,
        showParentCategoryOptions,
        showChangeCategoryImageSheet,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                    {uploadCategoryImageInfo()}
                    {categoryNameInfo()}
                    {parentCategoryInfo()}
                    {cancelAndSaveButton()}
                </ScrollView>
            </View>
            {changeCategoryImageBottomSheet()}
        </View>
    )

    function changeCategoryImageBottomSheet() {
        return (
            <BottomSheet
                isVisible={showChangeCategoryImageSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
                onBackdropPress={() => updateState({ showChangeCategoryImageSheet: false })}
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

    function parentCategoryInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Choose Parent Category
                </Text>
                <Menu
                    visible={showParentCategoryOptions}
                    anchor={
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => updateState({ showParentCategoryOptions: true })}
                            style={styles.parentCategoryWrapStyle}
                        >
                            <Text style={{ flex: 1, ...Fonts.grayColor14Medium }}>
                                {selectedParentCategory
                                    ?
                                    selectedParentCategory
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
                    onRequestClose={() => updateState({ showParentCategoryOptions: false })}
                >
                    <View style={{ width: width - 40 }}>
                        {
                            parentCategoryList.map((item, index) => (
                                <MenuItem
                                    key={`${index}`}
                                    textStyle={{ ...Fonts.grayColor14Medium }}
                                    onPress={() => {
                                        updateState({ selectedParentCategory: item, showParentCategoryOptions: false })
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

    function categoryNameInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                    Enter Category Name
                </Text>
                <TextInput
                    placeholder="eg. Fast Food"
                    placeholderTextColor={Colors.grayColor}
                    value={categoryName}
                    onChangeText={(text) => updateState({ categoryName: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldWrapStyle}
                />
            </View>
        )
    }

    function uploadCategoryImageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
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
                    Add Category
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
    parentCategoryWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        paddingVertical: Platform.OS == 'ios' ? Sizes.fixPadding + 1 : Sizes.fixPadding + 2,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
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
        marginVertical: Sizes.fixPadding * 3.5,
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

export default AddCategoryScreen;