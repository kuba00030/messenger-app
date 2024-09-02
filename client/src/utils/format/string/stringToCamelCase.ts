export const stringToCamelCase = (string: string) => {
  const words = string.split(" ");

  if (words.length > 1) {
    return words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return string.toLowerCase();
};
