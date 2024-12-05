import { StyleSheet, Text, View, Image } from "react-native";
import Selector from "../../UI/Selector";

const UserItem = ({ user, onSelect }) => {
  // Handlers ----------------------------
  const handleSelect = () => onSelect(user);

  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Image source={{ uri: user.UserImageURL }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {user.UserFirstname} {user.UserLastname}
          </Text>
          <Text style={styles.subText}>{user.UserType}</Text>
          <Text style={styles.subText}>{user.UserEmail}</Text>
        </View>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  pressedItem: {
    backgroundColor: "azure",
  },
});

export default UserItem;
