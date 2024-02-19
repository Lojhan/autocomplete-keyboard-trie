
export class Trie {
  public children: Record<string, Trie> = {};
  public isEnd = false;

  public getChar(char: string): Trie | null {
    return this.children[char] ?? null;
  }

  public setChar(char: string): Trie {
    const subtrie = new Trie();
    this.children[char] = subtrie;
    return subtrie;
  }

  public addWord(word: string) {
    if (word.length === 0) {
      this.isEnd = true;
      return;
    }

    const [char, ...rest] = word;
    let subtrie = this.getChar(char);
    subtrie ??= this.setChar(char);

    subtrie.addWord(rest.join(""));
  }

  public listPrefixWords(prefix: string, limit: number): string[] {
    const words: string[] = [];
    let currentNode: Trie = this;

    for (const char of prefix) {
      const nextNode = currentNode.getChar(char);
      if (!nextNode) return [];
      currentNode = nextNode;
    }

    this.collectWords(currentNode, prefix, words, limit);
    return words;
  }

  private collectWords(
    currentNode: Trie,
    prefix: string,
    words: string[],
    limit: number
  ) {
    if (currentNode.isEnd) words.push(prefix);

    for (const char in currentNode.children) {
      if (words.length >= limit) break;
      this.collectWords(
        currentNode.children[char],
        prefix + char,
        words,
        limit
      );
    }
  }

  
}
