import { useState } from "react";
import { StyleSheet } from "react-native";
import Form from "../../UI/Form.js";
import Icons from "../../UI/Icons";

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  const defaultUser = {
    UserID: Math.floor(100000 + Math.random() * 900000),
    UserFirstname: "",
    UserLastname: "",
    UserEmail: "",
    UserImageURL:
      "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    UserType: "Student",
    UserYear: "",
  };

  const userTypes = [
    { value: "Student", label: "Student" },
    { value: "Staff", label: "Staff" },
  ];

  const [user, setUser] = useState({
    ...defaultUser,
    ...originalUser,
    UserType: originalUser?.UserType ?? userTypes[0]?.value,
  });

  const handleChange = (field, value) => setUser({ ...user, [field]: value });

  const handleSubmit = () => onSubmit(user);

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={originalUser ? "Modify" : "Add"}
      submitIcon={originalUser ? <Icons.Edit /> : <Icons.Add />}
    >
      <Form.InputText
        label="First Name"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
        placeholder="Enter first name"
      />

      <Form.InputText
        label="Last Name"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
        placeholder="Enter last name"
      />

      <Form.InputText
        label="Email"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
        placeholder="Enter email address"
      />

      <Form.InputText
        label="Image URL"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
        placeholder="Enter image URL"
      />

      <Form.InputSelect
        label="User Type"
        prompt="Select user type ..."
        options={userTypes}
        value={user.UserType}
        onChange={(value) => handleChange("UserType", value)}
      />

      {user.UserType === "Student" && (
        <Form.InputText
          label="Year"
          value={user.UserYear}
          onChange={(value) => handleChange("UserYear", value)}
          placeholder="Enter enrollment year (e.g., 2022-23)"
        />
      )}
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
