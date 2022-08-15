import { getMyWordsSet, readBook, syncWriteFile } from "./GetMyWords";
let MIN_WORD_COUNT = 5;
let MAX_WORD_COUNT = 40;

export const bookReader = (bookWrds: Map<string, number>) => {
  const myWrd = (myWrds: Set<string>) => {
    var newWords: string = "";
    console.log("My word LENGTH IS " + myWrds.size);
    console.log("Booke word LENGTH IS " + bookWrds.size);
    bookWrds.forEach((val: number, key: string) => {
      if (val > MIN_WORD_COUNT && val < MAX_WORD_COUNT && myWrds.has(key)) {
        bookWrds.delete(key);
      }
    });
    sortedArray(bookWrds).forEach((wr) => (newWords += wr + "\n"));
    // let newFile: File = new File('newFile.txt')
    // syncWriteFile(newFile,"newWord.txt", newWords);
    console.log(" the end of the job " + newWords.length);
  };
  getMyWordsSet(myWrd);
};

export function getSimilarWords(
  file: File,
  minWrd: number,
  maxWrd: number
): File {
  MIN_WORD_COUNT = minWrd;
  MAX_WORD_COUNT = maxWrd;
  readBook(bookReader, file);
  return file;
}

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
