import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useLoad from "../../API/useLoad";
import Screen from "../layout/Screen.js";
import { ButtonTray, Button } from "../../UI/Button.js";
import UserList from "../../entity/users/UserList.js";
import Icons from "../../UI/Icons.js";

const UserListScreen = ({ navigation }) => {
  // State -------------------------------
  const [loadedUsers, , isLoading] = useLoad("users");
  const [sessionUsers, setSessionUsers] = useState([]);

  useEffect(() => {
    if (loadedUsers.length > 0) {
      setSessionUsers(loadedUsers);
    }
  }, [loadedUsers]);

  const onAdd = (newUser) => {
    const updatedUsers = [...sessionUsers, newUser];
    setSessionUsers(updatedUsers);
  };

  const onModify = (modifiedUser) => {
    const updatedUsers = sessionUsers.map((user) =>
      user.UserID === modifiedUser.UserID ? { ...user, ...modifiedUser } : user
    );
    setSessionUsers(updatedUsers);
  };

  const onDelete = (userToDelete) => {
    const updatedUsers = sessionUsers.filter(
      (user) => user.UserID !== userToDelete.UserID
    );
    setSessionUsers(updatedUsers);
  };

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onModify, onDelete });

  // View --------------------------------
  return (
    <Screen>
      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Add User"
            icon={<Icons.Add />}
            onClick={gotoAddScreen}
          />
        </ButtonTray>
        {isLoading ? (
          <View style={styles.loading}>
            <Text>Loading users...</Text>
            <ActivityIndicator size="large" />
          </View>
        ) : sessionUsers.length > 0 ? (
          <UserList users={sessionUsers} onSelect={gotoViewScreen} />
        ) : (
          <View style={styles.error}>
            <Text>No users available.</Text>
          </View>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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

export default UserListScreen;
