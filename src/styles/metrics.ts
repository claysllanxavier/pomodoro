import { Dimensions, Platform } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  basePadding: 15,
  doubleBasePadding: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  statusBarHeight: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  baseRadius: 7,
  circleSize: 270,
};

export default metrics;
