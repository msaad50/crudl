import Screen from "../layout/Screen.js";
import UserView from "../../entity/users/UserView.js";

const UserViewScreen = ({ navigation, route }) => {
  const { user, onModify, onDelete } = route.params;

  const gotoModifyScreen = () => {
    navigation.navigate("UserModifyScreen", {
      user,
      onModify: (updatedUser) => {
        onModify(updatedUser);
        navigation.setParams({ user: updatedUser });
      },
    });
  };

  const handleDelete = () => {
    onDelete(user);
    navigation.goBack();
  };

  return (
    <Screen>
      <UserView
        user={user}
        onModify={gotoModifyScreen}
        onDelete={handleDelete}
      />
    </Screen>
  );
};

export default UserViewScreen;
