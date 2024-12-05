import Screen from "../layout/Screen.js";
import ModuleView from "../../entity/modules/ModuleView.js";

const ModuleViewScreen = ({ navigation, route }) => {
  const { module, onDelete, onModify } = route.params;

  const gotoModifyScreen = () => {
    navigation.navigate("ModuleModifyScreen", {
      module,
      onModify: (updatedModule) => {
        onModify(updatedModule);
        navigation.setParams({ module: updatedModule });
      },
    });
  };
  const handleDelete = () => {
    onDelete(module);
    navigation.goBack();
  };

  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={handleDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

export default ModuleViewScreen;
