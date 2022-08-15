import { readSync, writeFileSync } from "fs";
import { join } from "path";
import { modifyWrd } from "./CheckWord";

const fs = require("fs");

var path = "src/myWords.txt";

export function getMyWordsSet(callback: Function) {
  var myWords: Set<string> = new Set<string>();
  fs.readFile(path, function (err: any, data: any) {
    if (err) throw err;

    const arr = data.toString().split(/[^a-zA-Z0-9]+/);

    for (let i of arr) {
      myWords.add(modifyWrd(i));
    }
    callback(myWords);
  });
}

// ✅ write to file SYNCHRONOUSLY
export function syncWriteFile(filename: string, data: any) {
  writeFileSync(join(__dirname, filename), data, {
    flag: "w",
  });
}

export function readBook(callback: Function, filePath: File) {
  var words: Map<string, number> = new Map<string, number>();
  console.log("the start !!");
  fs.readFile(path, function (err: any, data: any) {
    if (err) throw err;

    const arr = data.toString().split(/[^a-zA-Z0-9]+/);

    for (let i of arr) {
    }
  });

  // fs.readFile(path, function (err: any, data: any) {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   console.log("Asynchronous read: " + data.toString());
  // });
  // console.log("Finish reading:");
  // new PdfReader().parseFileItems(filePath, (err: any, item: any) => {
  //   if (err) console.error("error:", err);
  //   else if (!item) {
  //     console.warn("Book contains " + words.size);
  //     callback(words);
  //   } else if (item.text) {
  //     String(item.text)
  //       .split(" ")
  //       .forEach((wrd) => {
  //         wrd = modifyWrd(wrd);
  //         let count = words.get(wrd);
  //         words.set(wrd, count ? count + 1 : 1);
  //       });
  //   }
  // });
}

export function syncWriteFile2(): Blob {
  let byteCharacters = "the new fucking word";
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  let info = new Blob([new Uint8Array(byteNumbers)]);
  // let filles: File = new File(info, "newFIle");
  return info;
}

// syncWriteFile("newWord.txt", "One\nTwo\nThree\nFour");
