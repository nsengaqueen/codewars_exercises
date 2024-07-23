export const boolToWord = (bool: boolean): string => {
  return bool === true ? "Yes" : "No";
};
console.log(boolToWord(true));
