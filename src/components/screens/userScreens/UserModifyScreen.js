import Screen from "../layout/Screen.js";
import UserForm from "../../entity/users/UserForm.js";

const UserModifyScreen = ({ navigation, route }) => {
  const { user, onModify } = route.params;

  // Handlers ----------------------
  const handleSubmit = (updatedUser) => {
    onModify(updatedUser);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  // View --------------------------
  return (
    <Screen>
      <UserForm
        originalUser={user}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

export default UserModifyScreen;
