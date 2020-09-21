import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "./styles";

import Time from "./pages/Time";
import Tasks from "./pages/Tasks";
import ComingSoon from "./pages/ComingSoon";
import AddTask from "./pages/AddTask";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

function TasksScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 30,
        },
        labelStyle: {
          fontFamily: "roboto_400",
          fontSize: 11,
        },
        inactiveTintColor: colors.dark,
        activeTintColor: colors.blue,
      }}
    >
      <Screen
        name="Time"
        component={Time}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused }) => {
            return (
              <FontAwesome5
                name="stopwatch"
                size={size}
                color={focused ? colors.blue : colors.dark}
              />
            );
          },
        }}
      />
      <Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused }) => {
            return (
              <FontAwesome5
                name="tasks"
                size={size}
                color={focused ? colors.blue : colors.dark}
              />
            );
          },
        }}
      />
      <Screen
        name="Charts"
        component={ComingSoon}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused }) => {
            return (
              <FontAwesome5
                name="chart-pie"
                size={size}
                color={focused ? colors.blue : colors.dark}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={ComingSoon}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused }) => {
            return (
              <FontAwesome5
                solid
                name="user"
                size={size}
                color={focused ? colors.blue : colors.dark}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
