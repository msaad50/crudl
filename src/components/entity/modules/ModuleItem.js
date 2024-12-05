import { StyleSheet, Text, View, Image } from "react-native";
import Selector from "../../UI/Selector";
import Favourite from "../../UI/Favourite";

const ModuleItem = ({ module, onSelect, onFavourite }) => {
  // Handlers ----------------------------
  const handleSelect = () => onSelect(module);
  const handleFavourite = () => onFavourite(module);

  // View --------------------------------
  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Favourite
          isFavourite={module.ModuleFavourite}
          onSelect={handleFavourite}
          style={styles.iconContainer}
        />
        <Image source={{ uri: module.ModuleImage }} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>{module.ModuleCode}</Text>{" "}
            <Text>{module.ModuleName}</Text>
          </Text>
        </View>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  iconContainer: {
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    flexWrap: "wrap",
  },
  boldText: {
    fontWeight: "bold",
  },
  pressedItem: {
    backgroundColor: "azure",
  },
});

export default ModuleItem;
