import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  LogBox,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useLoad from "../../API/useLoad";
import Screen from "../layout/Screen.js";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import ModuleList from "../../entity/modules/ModuleList.js";

const ModuleListScreen = ({ navigation }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const [loadedModules, , isLoading] = useLoad("modules");

  const [sessionModules, setSessionModules] = useState([]);
  const [loggedinUser, setLoggedinUser] = useState(null);

  useEffect(() => {
    if (loadedModules.length > 0) {
      setSessionModules(loadedModules);
    }
  }, [loadedModules]);

  const onAdd = (newModule) => {
    const updatedModules = [...sessionModules, newModule];
    setSessionModules(updatedModules);
  };

  const onModify = (modifiedModule) => {
    const updatedModules = sessionModules.map((module) =>
      module.ModuleID === modifiedModule.ModuleID
        ? { ...module, ...modifiedModule }
        : module
    );
    setSessionModules(updatedModules);
  };

  const onDelete = (moduleToDelete) => {
    const updatedModules = sessionModules.filter(
      (module) => module.ModuleID !== moduleToDelete.ModuleID
    );
    setSessionModules(updatedModules);
  };

  const handleFavourite = (module) => {
    const isFavourite = !module.ModuleFavourite;
    const updatedModules = sessionModules.map((item) =>
      item.ModuleID === module.ModuleID
        ? { ...item, ModuleFavourite: isFavourite }
        : item
    );
    setSessionModules(updatedModules);
  };

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onModify, onDelete });

  return (
    <Screen>
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}
      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Add Module"
            icon={<Icons.Add />}
            onClick={gotoAddScreen}
          />
        </ButtonTray>
        {isLoading ? (
          <View style={styles.loading}>
            <Text>Retrieving records ...</Text>
            <ActivityIndicator size="large" />
          </View>
        ) : sessionModules.length > 0 ? (
          <ModuleList
            modules={sessionModules}
            onSelect={gotoViewScreen}
            onFavourite={handleFavourite}
          />
        ) : (
          <View style={styles.error}>
            <Text>No modules available.</Text>
          </View>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcome: { marginTop: 5, marginBottom: 5 },
  container: { flex: 1, gap: 15 },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mistyrose",
    padding: 10,
    borderRadius: 5,
  },
});

export default ModuleListScreen;
