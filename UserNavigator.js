import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "./src/components/screens/userScreens/UserListScreen";
import UserAddScreen from "./src/components/screens/userScreens/UserAddScreen";
import UserViewScreen from "./src/components/screens/userScreens/UserViewScreen";
import UserModifyScreen from "./src/components/screens/userScreens/UserModifyScreen";

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: "List Users" }}
      />
      <Stack.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: "Add User" }}
      />
      <Stack.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: "View User" }}
      />
      <Stack.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: "Modify User" }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
