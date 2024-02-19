import { Text, View } from "react-native";

type KeyProps = {
  children: string;
  width?: number;
  onKeyPress: (key: string) => void;
};

export function Key({ children, onKeyPress, width }: KeyProps) {
  return (
    <View style={styles.key(width)} onTouchEnd={() => onKeyPress(children)}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = {
  key: (width?: number) => ({
    backgroundColor: "grey",
    paddingHorizontal: 5,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 5,
    width: width ?? 30,
  }),
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
} as const;
