function generateHashtag(str) {
  if (str.trim().length === 0) {
    return false;
  }

  let words = str.trim().split(/\s+/);
  let hashtag =
    "#" +
    words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}

console.log(generateHashtag(" hello mylady "));
