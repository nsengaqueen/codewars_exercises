function solution(str) {
  const splitByTwoChars = (str) => {
    const chunks = str.match(/.{1,2}/g) || [];

    if (chunks.length > 0 && chunks[chunks.length - 1].length === 1) {
      chunks[chunks.length - 1] += "_";
    }

    return chunks;
  };

  return splitByTwoChars(str);
}
