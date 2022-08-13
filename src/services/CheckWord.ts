export function modifyWrd(word: string): string {
  word = word.toLowerCase();
  word = word.replace(/[^a-z]/g, "");
  if (word.length < 3) return "";

  if (word.length < 6) return word;

  if (word.endsWith("ing")) return word.substring(0, word.length - 3);
  if (word.endsWith("ary")) return word.substring(0, word.length - 3);
  if (word.endsWith("ory")) return word.substring(0, word.length - 3);
  if (word.endsWith("ery")) return word.substring(0, word.length - 3);

  if (word.endsWith("ied")) return word.substring(0, word.length - 3) + "y";
  if (word.endsWith("ies")) return word.substring(0, word.length - 3) + "y";
  if (word.endsWith("ier")) return word.substring(0, word.length - 3) + "y";

  if (word.endsWith("ed")) return word.substring(0, word.length - 2);
  if (word.endsWith("er")) return word.substring(0, word.length - 2);
  if (word.endsWith("es")) return word.substring(0, word.length - 2);
  if (word.endsWith("ly")) return word.substring(0, word.length - 2);

  if (word.endsWith("s")) return word.substring(0, word.length - 1);

  return word;
}

// function testModifyWord(expeced: string, testWord: string) {
//   let wrd: string = modifyWrd(testWord);
//   if (wrd === expeced) console.log("OK");
//   else
//     throw new Error(
//       "Expected str is: " +
//         expeced +
//         " the result is " +
//         wrd +
//         " the word was + " +
//         testWord
//     );
// }

// testModifyWord("ddd", "ddd-ing");
// testModifyWord("", "5435");
// testModifyWord("dss", "dss4ing");
// testModifyWord("fdaf", "fdafs");
// testModifyWord("rdrdr", "rdrdrs.,");
