import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import BottomTabBarScreen from "./components/bottomTabBarScreen";
import { LogBox } from 'react-native';
import EditFoodItemScreen from "./screens/editFoodItem/editFoodItemScreen";
import AddCategoryScreen from "./screens/addCategory/addCategoryScreen";
import AddNewItemScreen from "./screens/addNewItem/addNewItemScreen";
import EditProfileScreen from "./screens/editProfile/editProfileScreen";
import RestaurantInfoScreen from "./screens/restaurantInfo/restaurantInfoScreen";
import DailyOffersScreen from "./screens/dailyOffers/dailyOffersScreen";
import SetDeliveryAreasScreen from "./screens/setDeliveryAreas/setDeliveryAreasScreen";
import NotificationsScreen from "./screens/notifications/notificationsScreen";
import ReviewsScreen from "./screens/reviews/reviewsScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import SplashScreen from "./screens/splashScreen";
import SigninScreen from "./screens/auth/signinScreen";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

ExpoSplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat_Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition }} />
          <Stack.Screen name="EditFoodItem" component={EditFoodItemScreen} />
          <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
          <Stack.Screen name="AddNewItem" component={AddNewItemScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="RestaurantInfo" component={RestaurantInfoScreen} />
          <Stack.Screen name="DailyOffers" component={DailyOffersScreen} />
          <Stack.Screen name="SetDeliveryAreas" component={SetDeliveryAreasScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Reviews" component={ReviewsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;