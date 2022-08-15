import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import fileDownload from "js-file-download";
import { getSimilarWords } from "../services/Main";
import { syncWriteFile2 } from "../services/GetMyWords";

const WordCounter = (props: any) => {
  const options = [{ value: "pdf", label: "PDF" }];

  const [formatSelect, setFormatSelect] = useState();

  const onSelect = (select: any) => {
    setFormatSelect(select);
  };

  const [file, setFile] = useState<any>();

  function handleChange(event: any) {
    setFile(event.target.files[0]);
    console.log("from listener " + JSON.stringify(file));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    console.log("handle submit" + JSON.stringify(file));
    console.log("handle submit name" + file.name);
    let newFile = getSimilarWords(file, 5, 40);
    syncWriteFile2();
    fileDownload(syncWriteFile2(), "newOne.txt");

    formData.append("file", file);
    formData.append("fileName", file.name);
  }

  const onFindWrdsClick = (click: any) => {};
  return (
    <div>
      <Select options={options} />
      <form onSubmit={handleSubmit}>
        <Input type="file" onChange={handleChange} />
        <Button variant="contained" type="submit" onClick={onFindWrdsClick}>
          НАЙТИ СЛОВА
        </Button>
      </form>
    </div>
  );
};

export default WordCounter;
