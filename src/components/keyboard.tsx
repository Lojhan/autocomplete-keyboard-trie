import { View } from "react-native";
import { Key } from "./key";
import { useKeyboard } from "../contexts/keyboardContext";

const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  ["space"],
];

export function Keyboard() {
  const { pushKey } = useKeyboard();

  return (
    <View style={keyboardStyle}>
      {rows.map((row, i) => (
        <View key={i} style={{ flexDirection: "row" }}>
          {row.map((key) => {
            if (key === "space") {
              return (
                <Key key={key} onKeyPress={pushKey} width={190}>
                  {" "}
                </Key>
              );
            }

            return (
              <Key key={key} onKeyPress={pushKey} width={30}>
                {key}
              </Key>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const keyboardStyle = {
  backgroundColor: "black",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: 20,
} as const;
