import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  Platform,
} from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import MyStatusBar from "../../components/myStatusBar";

const { width } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const [showLogoutDialog, setshowLogoutDialog] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 7.0 }}
        >
          {profileInfo()}
          {profileOptions()}
          {logoutOption()}
        </ScrollView>
        {logoutDialog()}
      </View>
    </View>
  );

  function logoutDialog() {
    return (
      <Dialog.Container
        visible={showLogoutDialog}
        contentStyle={styles.dialogContainerStyle}
        headerStyle={{ margin: 0.0, padding: 0 }}
        onBackdropPress={()=>{setshowLogoutDialog(false)}}
        onRequestClose={() => setshowLogoutDialog(false)}
      >
        <View
          style={{
            padding: Platform.OS == "ios" ? Sizes.fixPadding * 2.0 : 0,
            paddingHorizontal:
              Platform.OS == "ios"
                ? Sizes.fixPadding * 2.0
                : Sizes.fixPadding - 5.0,
            backgroundColor: Colors.whiteColor,
            alignItems: "center",
          }}
        >
          <Text style={{ ...Fonts.blackColor16SemiBold }}>
            Are you sure want to logout?
          </Text>
          <View
            style={{
              marginTop: Sizes.fixPadding * 2.5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setshowLogoutDialog(false)}
              style={styles.cancelButtonStyle}
            >
              <Text style={{ ...Fonts.primaryColor15SemiBold }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setshowLogoutDialog(false);
                navigation.push("Splash");
              }}
              style={styles.logoutButtonStyle}
            >
              <Text style={{ ...Fonts.whiteColor15SemiBold }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  function logoutOption() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setshowLogoutDialog(true)}
        style={{ ...styles.profileOptionsWrapStyle }}
      >
        <View style={styles.profileOptionWrapStyle}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/icons/logout.png")}
              style={{
                width: 20.0,
                height: 20.0,
                resizeMode: "contain",
                tintColor: Colors.primaryColor,
              }}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: Sizes.fixPadding + 5.0,
                ...Fonts.primaryColor16SemiBold,
              }}
            >
              Logout
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            color={Colors.grayColor}
            size={14}
          />
        </View>
      </TouchableOpacity>
    );
  }

  function profileOptions() {
    return (
      <View>
        <View
          style={{
            ...styles.profileOptionsWrapStyle,
            marginTop: Sizes.fixPadding * 3.0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("RestaurantInfo")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/restaurant.png"),
              option: "Restaurant Info",
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("DailyOffers")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/offer.png"),
              option: "Daily Offers",
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("SetDeliveryAreas")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/location.png"),
              option: "Set Delivery Are's",
            })}
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.profileOptionsWrapStyle,
            marginVertical: Sizes.fixPadding * 2.0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("Notifications")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/notification.png"),
              option: "Notifications",
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("Reviews")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/review.png"),
              option: "Reviews",
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.push("Settings")}
          >
            {profileOptionSort({
              optionIcon: require("../../assets/images/icons/settings.png"),
              option: "Settings",
            })}
          </TouchableOpacity>
          {profileOptionSort({
            optionIcon: require("../../assets/images/icons/support.png"),
            option: "Support",
          })}
        </View>
      </View>
    );
  }

  function profileOptionSort({ optionIcon, option }) {
    return (
      <View style={styles.profileOptionWrapStyle}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={optionIcon}
            style={{ width: 20.0, height: 20.0, resizeMode: "contain" }}
          />
          <Text
            style={{
              flex: 1,
              marginLeft: Sizes.fixPadding + 5.0,
              ...Fonts.blackColor16SemiBold,
            }}
          >
            {option}
          </Text>
        </View>
        <MaterialIcons
          name="arrow-forward-ios"
          color={Colors.grayColor}
          size={14}
        />
      </View>
    );
  }

  function profileInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.push("EditProfile", { id: "photo" })}
        style={styles.profileInfoWrapStyle}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/users/logo1.png")}
            style={{
              width: 60.0,
              height: 60.0,
              borderRadius: Sizes.fixPadding - 5.0,
            }}
          />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
            <Text style={{ ...Fonts.blackColor15SemiBold }}>Las Vegas complext</Text>
            <Text style={{ ...Fonts.grayColor12Medium }}>+237 677227392</Text>
          </View>
        </View>
        <MaterialIcons
          name="arrow-forward-ios"
          color={Colors.grayColor}
          size={16}
        />
      </TouchableOpacity>
    );
  }

  function header() {
    return (
      <Text
        style={{
          margin: Sizes.fixPadding * 2.0,
          ...Fonts.blackColor18SemiBold,
        }}
      >
        Profile
      </Text>
    );
  }
};

const styles = StyleSheet.create({
  profileInfoWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  profileOptionsWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding,
    paddingTop: Sizes.fixPadding + 5.0,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow
  },
  profileOptionWrapStyle: {
    marginBottom: Sizes.fixPadding + 5.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoutButtonStyle: {
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
  dialogContainerStyle: {
    borderRadius: Sizes.fixPadding,
    width: width - 100,
    backgroundColor: Colors.whiteColor,
  },
});

export default ProfileScreen;
