function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  if (hours > 0) {
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${secs < 10 ? "0" + secs : secs}`;
  } else if (minutes > 0) {
    return `00:${minutes < 10 ? "0" + minutes : minutes}:${
      secs < 10 ? "0" + secs : secs
    }`;
  } else {
    return `00:00:${secs < 10 ? "0" + secs : secs}`;
  }
}
console.log(humanReadable(5677));
