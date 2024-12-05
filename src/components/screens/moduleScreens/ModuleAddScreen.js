import { StyleSheet } from "react-native";
import ModuleForm from "../../entity/modules/ModuleForm";
import Screen from "../layout/Screen.js";

const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  // Handlers ----------------------------
  const handleCancel = () => navigation.goBack();
  const handleSubmit = (newModule) => {
    onAdd(newModule);
    navigation.goBack();
  };
  // View --------------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Screen>
  );
};

export default ModuleAddScreen;
