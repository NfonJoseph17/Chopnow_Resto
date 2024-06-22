import React, { useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const { width } = Dimensions.get("window");

const categoriesList = ["Fast food", "Drinks"];

const popularItemsList = [
  {
    id: "1",
    foodImage: require("../../assets/images/food/food13.png"),
    foodName: "Fufu and Kati kati",
    amount: 1500.00,
  },
  {
    id: "2",
    foodImage: require("../../assets/images/food/food18.png"),
    foodName: "Fried Rice and chicken",
    amount: 1000.00,
  },
];

const availableFoodList = [
  {
    id: "1",
    foodImage: require("../../assets/images/food/food19.png"),
    foodName: "Hot pot irish",
    amount: 1500.0,
    customizable: false,
  },
  {
    id: "2",
    foodImage: require("../../assets/images/food/food13.png"),
    foodName: "Fufu and Kati kati",
    amount: 1500.0,
    customizable: false,
  },
  {
    id: "3",
    foodImage: require("../../assets/images/food/food18.png"),
    foodName: "Fried rice and chicken",
    amount: 1000.0,
    customizable: true,
  },
];

const HomeScreen = ({ navigation }) => {
  const [state, setState] = useState({
    selectedCategory: categoriesList[0],
    showDeleteFoodDialog: false,
    currentDeleteItemId: null,
    availableFoods: availableFoodList,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const {
    selectedCategory,
    showDeleteFoodDialog,
    currentDeleteItemId,
    availableFoods,
  } = state;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/images/food/food1.png")}
          style={{ height: 170.0, width: "100%", flex: 1 }}
        >
          {header()}
          <FlatList
            ListHeaderComponent={
              <>
                {restaurantDetail()}
                {mostPopularItemsInfo()}
                {categoriesListInfo()}
                {availableFoodsInfo()}
                {addCategoryAndNewItemButton()}
              </>
            }
            contentContainerStyle={{
              paddingBottom: Sizes.fixPadding * 8.0,
              paddingTop:
                StatusBar.currentHeight + Sizes.fixPadding * (Platform.OS == "ios" ? 7.0 : 2.0),
            }}
            showsVerticalScrollIndicator={false}
          />
        </ImageBackground>
        {deleteFoodDialog()}
      </View>
    </View>
  );

  function updateAvailableFoods() {
    const newList = availableFoods.filter(
      (item) => item.id != currentDeleteItemId
    );
    updateState({ availableFoods: newList });
  }

  function deleteFoodDialog() {
    return (
      <Dialog.Container
        visible={showDeleteFoodDialog}
        contentStyle={styles.deleteFoodDialogWrapStyle}
        headerStyle={{ margin: 0.0, padding: 0.0 }}
        onRequestClose={() => updateState({ showDeleteFoodDialog: false })}
      >
        <View
          style={{
            backgroundColor: Colors.whiteColor,
            padding: Platform.OS == 'ios' ? Sizes.fixPadding * 2.0 : Sizes.fixPadding - 5.0,
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", ...Fonts.blackColor16SemiBold }}>
            Are you sure want to Delete Item?
          </Text>
          <View
            style={{
              marginTop: Sizes.fixPadding + 5.0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => updateState({ showDeleteFoodDialog: false })}
              style={styles.cancelButtonStyle}
            >
              <Text style={{ ...Fonts.primaryColor15SemiBold }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                updateAvailableFoods();
                updateState({ showDeleteFoodDialog: false });
              }}
              style={styles.deleteButtonStyle}
            >
              <Text style={{ ...Fonts.whiteColor15SemiBold }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  function addCategoryAndNewItemButton() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 4.0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.push("AddCategory")}
          style={{
            ...styles.addCategoryAndNewItemButtonStyle,
            marginRight: Sizes.fixPadding - 2.0,
          }}
        >
          <Text style={{ ...Fonts.primaryColor15Bold }}>Add Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.push("AddNewItem")}
          style={{
            ...styles.addCategoryAndNewItemButtonStyle,
            marginLeft: Sizes.fixPadding - 2.0,
            backgroundColor: Colors.primaryColor,
          }}
        >
          <Text style={{ ...Fonts.whiteColor15Bold }}>Add New Item</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function availableFoodsInfo() {
    const renderItem = ({ item }) => (
      <View style={styles.foodInfoWrapStyle}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={item.foodImage}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              borderRadius: Sizes.fixPadding - 5.0,
            }}
          />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
            <Text style={{ ...Fonts.blackColor14SemiBold }}>
              {item.foodName}
            </Text>
            <Text
              style={{
                marginVertical: Sizes.fixPadding - 7.0,
                ...Fonts.blackColor12SemiBold,
              }}
            >
              
              {item.amount.toFixed(2)}{` XAF`}
            </Text>
            {item.customizable ? (
              <Text style={{ ...Fonts.primaryColor14Medium }}>Customise</Text>
            ) : null}
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push("EditFoodItem", { id: item.id })}
            style={{
              ...styles.editAndDeleteButtonStyle,
              marginRight: Sizes.fixPadding,
              backgroundColor: Colors.primaryColor,
            }}
          >
            <MaterialIcons name="edit" color={Colors.whiteColor} size={12} />
            <Text style={{ ...Fonts.whiteColor8Medium }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              updateState({
                currentDeleteItemId: item.id,
                showDeleteFoodDialog: true,
              })
            }
            style={{
              backgroundColor: Colors.blackColor,
              ...styles.editAndDeleteButtonStyle,
            }}
          >
            <MaterialIcons name="delete" color={Colors.whiteColor} size={12} />
            <Text style={{ ...Fonts.whiteColor8Medium }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <FlatList
          scrollEnabled={false}
          data={availableFoods}
          keyExtractor={(item) => `{item.id} XAF`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function categoriesListInfo() {
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: Sizes.fixPadding * 2.0,
            paddingLeft: Sizes.fixPadding * 2.0,
          }}
        >
          {categoriesList.map((item, index) => (
            <View
              key={`{index} XAF`}
              style={{
                marginRight: Sizes.fixPadding * 2.0,
                alignItems: "center",
              }}
            >
              {selectedCategory == item ? (
                <View style={styles.selectedCategoryWrapStyle}>
                  <Text style={{ ...Fonts.blackColor14SemiBold }}>{item}</Text>
                </View>
              ) : (
                <Text
                  onPress={() => updateState({ selectedCategory: item })}
                  style={{ ...Fonts.grayColor14Medium }}
                >
                  {item}
                </Text>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  function mostPopularItemsInfo() {
    const renderItem = ({ item }) => (
      <View style={styles.popularItemsWrapStyle}>
        <View style={{ flex: 1 }}>
          <Image source={item.foodImage} style={styles.popularFoodImageStyle} />
        </View>
        <View
          style={{
            padding: Sizes.fixPadding - 5.0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            <Text style={{ flex: 1, ...Fonts.blackColor12SemiBold }}>
              {item.foodName}
            </Text>
            <Text style={{ ...Fonts.blackColor12SemiBold }}>
              { } | { }
            </Text>
            <Text style={{ ...Fonts.primaryColor12SemiBold }}>
              
              {item.amount.toFixed(2)}
            </Text>
          </Text>
        </View>
      </View>
    );
    return (
      <View style={{}}>
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Most Popular
        </Text>
        <FlatList
          data={popularItemsList}
          keyExtractor={(item) => `{item.id}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: Sizes.fixPadding * 2.0,
            paddingLeft: Sizes.fixPadding * 2.0,
          }}
        />
      </View>
    );
  }

  function restaurantDetail() {
    return (
      <View style={styles.restaurantDetailWrapStyle}>
        <View style={styles.restuarantInfoWrapStyle}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../../assets/images/restaurants_logo/logo1.png")}
                style={styles.restaurantLogoStyle}
              />
              <View style={{ flex: 1, marginLeft: Sizes.fixPadding * 7.7 }}>
                <Text
                  numberOfLines={1}
                  style={{ ...Fonts.blackColor14SemiBold }}
                >
                  Las Vegas Complext
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  marginRight: Sizes.fixPadding - 5.0,
                  ...Fonts.primaryColor12SemiBold,
                }}
              >
                4.3
              </Text>
              <MaterialIcons
                name="star"
                color={Colors.primaryColor}
                size={14}
              />
            </View>
          </View>
          <Text
            style={{
              marginTop: Sizes.fixPadding,
              ...Fonts.grayColor14Medium,
            }}
          >
            Fast food, drinks
          </Text>
          <View
            style={{
              marginTop: Sizes.fixPadding - 5.0,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <MaterialIcons
              name="location-on"
              color={Colors.primaryColor}
              size={16}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: Sizes.fixPadding - 5.0,
                ...Fonts.grayColor13Medium,
              }}
            >
              3-Conners, Bambili
            </Text>
          </View>
        </View>
        <View style={styles.aboutRestaurantWrapStyle}>
          <Text style={{ ...Fonts.blackColor14SemiBold }}>
            About Restaurant
          </Text>
          <Text
            style={{
              marginLeft: Sizes.fixPadding + 10.0,
              ...Fonts.grayColor12Regular,
            }}
          >
           We prepare the best african dishes, Order food now from our restaurant and recieve what you see on the pictures
          </Text>
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <MaterialIcons
          name="share"
          color={Colors.whiteColor}
          size={22}
          onPress={() => { }}
          style={{ alignSelf: "flex-end" }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginTop: StatusBar.currentHeight + 20.0,
    marginBottom: Sizes.fixPadding + 5.0,
  },
  restaurantLogoStyle: {
    width: 70.0,
    position: "absolute",
    bottom: -5.0,
    height: 70.0,
    borderRadius: Sizes.fixPadding,
  },
  restuarantInfoWrapStyle: {
    borderRadius: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding,
  },
  restaurantDetailWrapStyle: {
    backgroundColor: "#DEE2EB",
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  aboutRestaurantWrapStyle: {
    borderBottomLeftRadius: Sizes.fixPadding,
    borderBottomRightRadius: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding + 2.0,
    paddingHorizontal: Sizes.fixPadding + 5.0,
    backgroundColor: "#DEE2EB",
  },
  popularFoodImageStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderTopLeftRadius: Sizes.fixPadding,
    borderTopRightRadius: Sizes.fixPadding,
  },
  popularItemsWrapStyle: {
    backgroundColor: "#DEE2EB",
    borderRadius: Sizes.fixPadding,
    width: width / 1.8,
    height: 105.0,
    marginRight: Sizes.fixPadding * 2.0,
    flex: 1,
  },
  selectedCategoryWrapStyle: {
    backgroundColor: "#DEE2EB",
    borderRadius: Sizes.fixPadding * 1.5,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding - 3.0,
  },
  foodInfoWrapStyle: {
    borderRadius: Sizes.fixPadding,
    elevation: 2.0,
    padding: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.fixPadding + 10.0,
    ...CommonStyles.shadow
  },
  editAndDeleteButtonStyle: {
    width: 32.0,
    height: 32.0,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
  },
  addCategoryAndNewItemButtonStyle: {
    flex: 1,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    paddingVertical: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding,
    marginLeft: Sizes.fixPadding,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    flex: 1,
  },
  cancelButtonStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: Sizes.fixPadding,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
  },
  deleteFoodDialogWrapStyle: {
    borderRadius: Sizes.fixPadding,
    width: width - 80,
    backgroundColor: Colors.whiteColor,
  },
});

export default HomeScreen;
