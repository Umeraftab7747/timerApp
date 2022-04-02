import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import HomeScreen from "../Views/HomeScreen";

const Drawer = createDrawerNavigator();
import { w, h } from "react-native-responsiveness";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { mainColor, screenbg } from "../AppColors";
import AboutUs from "../Views/AboutUs";
import ContactUs from "../Views/ContactUs";
import Donate from "../Views/Donate";
const icons = [
  { title: "Understanding the list" },
  { title: "About Us" },
  { title: "Contact F.E.P" },
  { title: "Donate" },
];
const CheckScreen = ({ progress, ...rest }) => {
  const [navigSta, setnavigSta] = useState("List");
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: screenbg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{ fontSize: h("3%"), fontWeight: "bold", color: mainColor }}
        >
          CHOCOLATE LIST
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "55%",
          backgroundColor: screenbg,
        }}
      >
        <DrawerContentScrollView
          {...rest}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          {rest?.state?.routeNames.map((dat, index) => (
            <DrawerItem
              key={index}
              label={`${icons[index].title}`}
              onPress={() => {
                setnavigSta(`${dat}`);
                rest?.navigation.navigate(`${dat}`);
              }}
              activeBackgroundColor={screenbg}
              activeTintColor={"black"}
              inactiveBackgroundColor={screenbg}
              inactiveTintColor={"black"}
              focused={navigSta === dat ? true : false}
            />
          ))}
        </DrawerContentScrollView>
      </View>
      <View
        style={{
          width: "100%",
          height: "35%",
          backgroundColor: screenbg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/empowe.png")}
          style={{
            width: "90%",
            height: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
    </>
  );
};
function DrawerNavig() {
  return (
    <Drawer.Navigator
      initialRouteName="List"
      drawerContent={(props) => <CheckScreen {...props} />}
    >
      <Drawer.Screen
        name="List"
        options={{
          headerShown: false,
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: screenbg,
          drawerInactiveTintColor: "black",
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="AboutUs"
        options={{
          headerShown: false,
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: screenbg,
          drawerInactiveTintColor: "black",
        }}
        component={AboutUs}
      />
      <Drawer.Screen
        name="ContactFEP"
        options={{
          headerShown: false,
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: screenbg,
          drawerInactiveTintColor: "black",
        }}
        component={ContactUs}
      />
      <Drawer.Screen
        name="Donate"
        options={{
          headerShown: false,
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: screenbg,
          drawerInactiveTintColor: "black",
        }}
        component={Donate}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavig;
