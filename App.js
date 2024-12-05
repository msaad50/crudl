import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModuleNavigator from "./ModuleNavigator";
import UsersNavigator from "./UserNavigator";
import Icons from "./src/components/UI/Icons";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: "gray" },
          drawerActiveTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Modules CRUDLer"
          component={ModuleNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icons.Modules color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Users CRUDLer"
          component={UsersNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icons.Users color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
