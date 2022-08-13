// import TreeMap from "ts-treemap";
import { readBook } from "./BookReader";
import { getMyWordsSet, syncWriteFile } from "./GetMyWords";

const bookReader = (bookWrds: Map<string, number>) => {
  const myWrd = (myWrds: Set<string>) => {
    var newWords: string = "";
    console.log("My word LENGTH IS " + myWrds.size);
    console.log("Booke word LENGTH IS " + bookWrds.size);
    // myWrds.forEach((an) => console.log(an));
    // for (let [key, value] of bookWrds) {
    //   if (value > 5 && value < 40 && myWrds.has(key)) {
    //     bookWrds.delete(key);
    //   }
    // }
    sortedArray(bookWrds).forEach((wr) => (newWords += wr + "\n"));

    syncWriteFile("newWord.txt", newWords);
    console.log(" the end of the job " + newWords.length);
  };
  getMyWordsSet(myWrd);
};
readBook(bookReader, "src/test.pdf");

function sortedArray(words: Map<string, number>): Array<string> {
  // const treemap = new TreeMap<number, string>();
  const char = "&";
  // for (let [key, value] of words) {
  //   let st = treemap.get(value);
  //   if (st === undefined) treemap.set(value, key);
  //   else {
  //     treemap.set(value, (st += char + key));
  //   }
  // }
  const res: string[] = [];
  // let i = 0;
  // for (let [key, value] of treemap) {
  //   value.split(char).forEach((w: string) => (res[i++] = w));
  // }
  return res;
}
