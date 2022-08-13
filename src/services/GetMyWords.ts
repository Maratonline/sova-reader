import { writeFileSync } from "fs";
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

// syncWriteFile("newWord.txt", "One\nTwo\nThree\nFour");
