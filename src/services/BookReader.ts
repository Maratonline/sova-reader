const fs = require("fs");

// import * as PdfReader from "pdfreader";

// export function readBook(callback: Function, filePath: File) {
//   var words: Map<string, number> = new Map<string, number>();
//   console.log("the start !!");
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
// }

export function readBook2(callback: Function, filePath: File) {
  var words: Map<string, number> = new Map<string, number>();
  console.log("the start !!");

  fs.readFile(filePath, function (err: any, data: any) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
  console.log("Finish reading:");
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
