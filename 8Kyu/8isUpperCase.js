String.prototype.isUpperCase = function () {
  if (this.toString() == this.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
  

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};