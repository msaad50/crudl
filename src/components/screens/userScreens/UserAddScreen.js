import UserForm from "../../entity/users/UserForm";
import Screen from "../layout/Screen.js";

const UserAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  // Handlers ----------------------------
  const handleCancel = () => navigation.goBack();
  const handleSubmit = (newUser) => {
    onAdd(newUser);
    navigation.goBack();
  };

  // View --------------------------------
  return (
    <Screen>
      <UserForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Screen>
  );
};

export default UserAddScreen;
