import { StyleSheet } from "react-native";
import ModuleForm from "../../entity/modules/ModuleForm";
import Screen from "../layout/Screen.js";

const ModuleModifyScreen = ({ navigation, route }) => {
  const { module, onModify } = route.params;

  // Handlers ----------------------------
  const handleSubmit = (updatedModule) => {
    onModify(updatedModule);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };

  // View --------------------------------
  return (
    <Screen>
      <ModuleForm
        originalModule={module}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
