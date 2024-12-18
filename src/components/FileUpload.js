import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = () => {
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append("image", file);

        // Use the environment variable for the API URL
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log('API URL:', apiUrl); // Debug the API URL

        if (!apiUrl) {
            alert("API URL is not defined. Check your .env.production file.");
            return;
        }

        axios.post(`${apiUrl}/uploads`, formData)
            .then(() => alert("File uploaded successfully!"))
            .catch(error => console.error("Error uploading file:", error));
    };


    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
