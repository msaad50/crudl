import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/moduleScreens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/moduleScreens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/moduleScreens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/moduleScreens/ModuleModifyScreen";

const Stack = createNativeStackNavigator();

const ModuleNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: "List Modules" }}
      />
      <Stack.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: "Add Module" }}
      />
      <Stack.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: "View Module" }}
      />
      <Stack.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: "Modify Module" }}
      />
    </Stack.Navigator>
  );
};

export default ModuleNavigator;
