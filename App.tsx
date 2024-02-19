import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Keyboard } from "./src/components/keyboard";
import { AutocompleteOptions } from "./src/components/autocompleteOptions";
import { TextInput } from "./src/components/textInput";
import { KeyboardProvider } from "./src/contexts/keyboardContext";

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardProvider>
        <TextInput />
        <AutocompleteOptions />
        <Keyboard />
        <StatusBar style="auto" />
      </KeyboardProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
