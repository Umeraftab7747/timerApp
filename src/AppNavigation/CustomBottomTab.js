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
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

import { inputBg, mainColor, screenBg } from "../AppColors";
import TimerScreen from "../Views/TimerScreen";
import ActivityScreen from "../Views/ActivityScreen";
const CustomBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Timer"
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          backgroundColor: mainColor,
          elevation: 1,
        },
        tabBarActiveTintColor: screenBg,
        headerShown: false,
        tabBarInactiveTintColor: "lightgrey",
      }}
    >
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          tabBarLabel: "Timer",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="timer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarLabel: "Activity",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomTab;
