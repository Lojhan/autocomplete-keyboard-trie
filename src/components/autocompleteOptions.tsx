import React from "react";
import { Text, View } from "react-native";
import { useKeyboard } from "../contexts/keyboardContext";
import { Trie } from "../lib/trie";

const listData = require("../lib/list.json");
const list = Array.from<string>(listData);

const trie = new Trie();
list.forEach((word) => trie.addWord(word));

export function AutocompleteOptions() {
  const { currentTextToReplace, replaceLastStringWithWord } = useKeyboard();
  const target = currentTextToReplace.toLowerCase();

  const start = performance.now();
  const options = target.length === 0 ? [] : trie.listPrefixWords(target, 3);
  const end = performance.now();

  return (
    <React.Fragment>
      <PerformanceTimeShow start={start} end={end} />
      <View style={autocompleteStyle}>
        {options.map((option, index) => (
          <React.Fragment key={option + index}>
            <View
              style={{ padding: 10 }}
              onTouchEnd={() => replaceLastStringWithWord(option)}
            >
              <Text style={{ color: "white" }}>{option}</Text>
            </View>
            {index !== options.length - 1 ? <Separator /> : null}
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  );
}

function PerformanceTimeShow({ start, end }: { start: number; end: number }) {
  let unitToDisplay = "ms";

  switch (true) {
    case end - start > 1000:
      start /= 1000;
      end /= 1000;
      unitToDisplay = "s";
      break;
    case end - start > 1:
      unitToDisplay = "ms";
      break;
    default:
      start *= 1000;
      end *= 1000;
      unitToDisplay = "μs";
  }

  return (
    <View style={{ padding: 5 }}>
      <Text style={{ color: "white" }}>
        Performance time: {(end - start).toFixed(2)}
        {unitToDisplay}
      </Text>
    </View>
  );
}

function Separator() {
  return <View style={{ width: 1, backgroundColor: "black", margin: 8 }} />;
}

const autocompleteStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "gray",
  width: "90%",
  justifyContent: "center",
  marginHorizontal: 20,
  borderRadius: 5,
  height: 40,
} as const;
