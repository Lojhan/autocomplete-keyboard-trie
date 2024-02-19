import { Trie } from "./trie";

describe("Trie", () => {
  it("should create a trie", () => {
    const trie = new Trie();
    expect(trie).toBeInstanceOf(Trie);
  });

  it("should add a word to the trie", () => {
    const trie = new Trie();
    trie.addWord("test");
    expect(
      trie.getChar("t")?.getChar("e")?.getChar("s")?.getChar("t")?.isEnd
    ).toBe(true);
  });

  it("should list words with a prefix", () => {
    const trie = new Trie();

    const words = [
      "carro",
      "casa",
      "casaco",
      "carroceria",
      "cachorro",
      "casca",
    ];

    for (let word of words) trie.addWord(word);
    expect(trie.listPrefixWords("ca", 3)).toEqual([
      "carro",
      "carroceria",
      "casa",
    ]);

    expect(trie.listPrefixWords("cas", words.length)).toEqual([
      "casa",
      "casaco",
      "casca",
    ]);

    expect(trie.listPrefixWords("casaco", words.length)).toEqual(["casaco"]);
  });

  it("should not list words with a prefix that does not exist", () => {
    const trie = new Trie();
    trie.addWord("test");
    expect(trie.listPrefixWords("cat", 3)).toEqual([]);
  });
});
