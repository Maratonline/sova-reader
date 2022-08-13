// declare function require(name: string);
const { PdfReader } = require("pdfreader");

import { modifyWrd } from "./CheckWord";

// import * as PdfReader from "pdfreader";

export function readBook(callback: Function, filePath: string) {
  var words: Map<string, number> = new Map<string, number>();
  console.log("the start !!");
  new PdfReader().parseFileItems(filePath, (err: any, item: any) => {
    if (err) console.error("error:", err);
    else if (!item) {
      console.warn("Book contains " + words.size);
      callback(words);
    } else if (item.text) {
      String(item.text)
        .split(" ")
        .forEach((wrd) => {
          wrd = modifyWrd(wrd);
          let count = words.get(wrd);
          words.set(wrd, count ? count + 1 : 1);
        });
    }
  });
}
