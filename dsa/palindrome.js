const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  if (normalized !== reversed) {
    return false;
  }
  return true;
};
console.log(isPalindrome("Madam"));
