import { createContext, useContext, useState } from "react";

type KeyboardContextType = {
  pushKey: (key: string) => void;
  replaceLastStringWithWord: (word: string) => void;
  clearText: () => void;
  removeLastKey: () => void;
  currentTextToReplace: string;
  text: string;
};

const KeyboardContext = createContext<KeyboardContextType>(
  {} as KeyboardContextType
);

function useKeyboard() {
  return useContext(KeyboardContext);
}

function KeyboardProvider(props: { children: React.ReactNode }) {
  const [text, setText] = useState("");
  const pushKey = (key: string) => setText((prev) => prev + key);

  const currentTextToReplace = text.split(" ").pop() ?? "";
  const clearText = () => setText("");

  const removeLastKey = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const replaceLastStringWithWord = (word: string) => {
    setText((prev) => {
      const lastSpace = prev.lastIndexOf(" ");
      return prev.substring(0, lastSpace + 1) + word;
    });
  };

  return (
    <KeyboardContext.Provider
      value={{
        pushKey,
        replaceLastStringWithWord,
        currentTextToReplace,
        text,
        clearText,
        removeLastKey,
      }}
      {...props}
    />
  );
}

export { KeyboardProvider, useKeyboard };
