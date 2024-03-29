function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is a palindrome
    for (let i = 0; i < cleanedStr.length / 2; i++) {
      if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]){
        return false;
      }
    }
    return true;
  }
  palindrome("eye");