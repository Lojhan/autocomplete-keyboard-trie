import { Text, View, TextInput as Ti } from "react-native";
import { useKeyboard } from "../contexts/keyboardContext";

export function TextInput() {
  const { text, clearText, pushKey, removeLastKey } = useKeyboard();

  return (
    <View style={textInputStyle}>
      <Ti
        value={text}
        style={{ color: "white", width: "85%" }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === "Backspace") return removeLastKey();
          pushKey(e.nativeEvent.key.toLowerCase());
        }}
      />
      <ClearButton onTouchEnd={clearText} />
    </View>
  );
}

type ClearButtonProps = {
  onTouchEnd: () => void;
};
function ClearButton(props: ClearButtonProps) {
  return (
    <View onTouchEnd={props.onTouchEnd}>
      <Text style={{ color: "white" }}>Clear</Text>
    </View>
  );
}

const textInputStyle = {
  backgroundColor: "grey",
  borderRadius: 5,
  width: "90%",
  height: 50,
  marginHorizontal: 20,
  marginBottom: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
} as const;
