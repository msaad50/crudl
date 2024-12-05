import { ScrollView, StyleSheet, Text, View } from "react-native";
import UserItem from "./UserItem.js";

const UserList = ({ users = [], onSelect }) => {
  if (!Array.isArray(users) || users.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>No users available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {users.map((user) => (
        <UserItem key={user.UserID} user={user} onSelect={onSelect} />
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

export default UserList;
