import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
  BottomTabBarHeightContext,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
import HomeScreen from "../Views/HomeScreen";
import ProfileScreen from "../Views/ProfileScreen";
import OrderScreen from "../Views/OrderScreen";
import CartScreen from "../Views/CartScreen";
import { inActiveColor, mainColor, opacityColor, secColor } from "../AppColors";

const CustomBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        },
        tabBarActiveTintColor: mainColor,
        headerShown: false,
        tabBarInactiveTintColor: inActiveColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Booking",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomTab;
