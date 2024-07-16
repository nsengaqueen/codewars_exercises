function solve(s) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
    console.log(charCount[char]);
  }

  const counts = Object.values(charCount);
  console.log(counts);
  for (let i = 0; i < counts.length; i++) {
    let modifiedCounts = [...counts];
    modifiedCounts[i]--;
    if (modifiedCounts[i] === 0) {
      modifiedCounts.splice(i, 1);
    }
    if (new Set(modifiedCounts).size === 1) {
      return true;
    }
  }

  return false;
}
console.log(solve("abba"));
