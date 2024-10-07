import React, { useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/FileInput.css'

const FileInput = () => {
  const handleFileChange = (event) => {
    let filesList = [];
    for (let i = 0; i < event.target.files.length; i++) {
      filesList.push(
        <div className="input-file-list-item" key={i}>
          <span className="input-file-list-name">{event.target.files[i].name}</span>
          <a href="#" onClick={(e) => removeFilesItem(e, event.target.files[i].name)} className="input-file-list-remove">x</a>
        </div>
      );
    }
    setFilesList(filesList);
  };

  const removeFilesItem = (event, fileName) => {
    let updatedFilesList = filesList.filter((file) => file.props.children[0].props.children !== fileName);
    setFilesList(updatedFilesList);
  };

  const [filesList, setFilesList] = useState([]);

  return (
    <div>
      <label className="input-file">
        <input type="file" name="file" onChange={handleFileChange} multiple/>
        <span>Выберите файл</span>
      </label>
      <div className="files-list">{filesList}</div>
    </div>
  );
};

export default FileInput;