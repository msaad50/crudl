import { MaterialIcons } from "@expo/vector-icons";

const Icons = {};

// View --------------------------------

const Add = () => <MaterialIcons name="add" size={16} />;
const Cancel = () => <MaterialIcons name="close" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Favourite = () => (
  <MaterialIcons name="favorite" size={18} color="crimson" />
);
const NotFavourite = () => (
  <MaterialIcons name="favorite-border" size={18} color="grey" />
);
const Sync = () => <MaterialIcons name="sync" size={16} />;

const Modules = ({ color, size }) => (
  <MaterialIcons name="apps" size={size} color={color} />
);
const Users = ({ color, size }) => (
  <MaterialIcons name="people" size={size} color={color} />
);

// Compose ------------------------------
Icons.Add = Add;
Icons.Cancel = Cancel;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Favourite = Favourite;
Icons.NotFavourite = NotFavourite;
Icons.Sync = Sync;
Icons.Modules = Modules;
Icons.Users = Users;

export default Icons;
