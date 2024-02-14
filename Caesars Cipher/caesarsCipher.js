function rot13(str) {
// Split the string into an array of characters
  const arr = str.split(""); 
  for (let i = 0; i < arr.length; i++) {
      const charCode = arr[i].charCodeAt(0);
//changing only uppercase letter by shifting
      if (charCode >= 65 && charCode <= 90) { 
//%26,example if we get(charCode - 65 + 13(this in range og 0-25))=27 we get 1 than adding 65 gives 66('b').
        arr[i] = String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
  }
  // Join the array of characters back into a string
  str = arr.join("");
  return str;
}
rot13("SERR PBQR PNZC");
