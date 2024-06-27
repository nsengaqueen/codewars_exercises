function filter_list(l) {
 
  return l.filter((string) => {
    return typeof string === "number";
  });
}
