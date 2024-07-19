function domainName(url) {
  //your code here
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www", "");
  return url.split(".")[0];
}
