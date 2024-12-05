import { ScrollView, StyleSheet, Text, View } from "react-native";
import ModuleItem from "./ModuleItem.js";

const ModuleList = ({ modules = [], onSelect, onFavourite }) => {
  if (!Array.isArray(modules) || modules.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>No modules available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {modules.map((module) => (
        <ModuleItem
          key={module.ModuleCode}
          module={module}
          onSelect={onSelect}
          onFavourite={onFavourite}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default ModuleList;
