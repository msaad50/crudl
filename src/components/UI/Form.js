import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, ButtonTray } from "./Button.js";
import Icons from "./Icons.js";

const Form = ({ onSubmit, onCancel, submitLabel = "Submit", children }) => {
  // View --------------------------------
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
        <ButtonTray>
          <Button label={submitLabel} icon={<Icons.Add />} onClick={onSubmit} />
          {onCancel && (
            <Button icon={<Icons.Cancel />} label="Cancel" onClick={onCancel} />
          )}
        </ButtonTray>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange, placeholder }) => {
  // View --------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        style={styles.itemTextInput}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const InputSelect = ({
  label,
  prompt,
  options,
  value,
  onChange,
  isLoading = false,
}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      {isLoading ? (
        <View style={styles.itemLoading}>
          <Text style={styles.itemLoadingText}>Loading records ...</Text>
        </View>
      ) : (
        <Picker
          mode="dropdown"
          selectedValue={value}
          onValueChange={onChange}
          style={styles.itemPicker}
        >
          <Picker.Item
            label={prompt}
            value={null}
            style={styles.itemPickerPrompt}
          />
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  formItems: {
    gap: 15,
  },
  item: {
    marginBottom: 15,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemLoading: {
    height: 50,
    backgroundColor: "mistyrose",
    justifyContent: "center",
    padding: 10,
  },
  itemLoadingText: {
    fontSize: 16,
    color: "gray",
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemPicker: {
    height: 50,
    backgroundColor: "whitesmoke",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemPickerPrompt: {
    color: "gray",
  },
});

Form.InputText = InputText;
Form.InputSelect = InputSelect;

export default Form;
