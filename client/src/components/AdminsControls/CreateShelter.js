import React from "react";
import { useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/global.css'
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/Auth.css'
import FileInput from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/FileInput'

const CreateShelter = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (files) => {
        setSelectedFiles(files);
    };
    return (
            <h3>Банковские реквизиты</h3>
    );
}


export default CreateShelter;