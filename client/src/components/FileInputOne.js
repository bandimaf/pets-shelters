import React, { useState } from 'react';

const FileInputOne = () => {
  const handleFileChange = (event) => {
    let file = event.target.files[0];
    // Update the state to reflect the selected file
    setFileName(file.name);
  };

  const [fileName, setFileName] = useState('');

  return (
    <div className="input-file">
      <input type="file" onChange={handleFileChange} />
      <span>{fileName}</span>
    </div>
  );
};

export default FileInputOne;