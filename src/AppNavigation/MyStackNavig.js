import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Views/HomeScreen";
import SplashScreen from "../Views/SplashScreen";
import SrchScnScreen from "../Views/SrchScnScreen";
import DrawerNavig from "./DrawerNavig";
import ChoclateDetl from "../Views/ChoclateDetl";
import NewsDetail from "../Views/NewsDetail";
const Stack = createStackNavigator();
export default function MyStackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="homeScrn"
          component={DrawerNavig}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SrchScnScreen"
          component={SrchScnScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chocoItemDesc"
          component={ChoclateDetl}
          options={{ headerShown: false }}
          initialParams={{ data: null }}
        />
        <Stack.Screen
          name="newsDesc"
          component={NewsDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
