function telephoneCheck(str) {
  /*
  1){"^(1\s?)?""} matches an optional "1" followed by an optional space. This allows for numbers like "1 555-555-5555".
  2){"(\(\d{3}\)|\d{3})"} matches either three digits enclosed in parentheses or three digits without parentheses.
  3){"[-\s]?"}" matches an optional hyphen or space after the first set of three digits.
  4){"\d{3}"}" matches the next three digits.
  5){"[-\s]?"} matches an optional hyphen or space after the second set of three digits.
  6){"\d{4}"} matches the final four digits.
  7{"$"} ensures that the input string ends after the last four digits.
  */
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
