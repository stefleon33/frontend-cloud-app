import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = () => {
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append("image", file);

        axios.post("http://184.73.251.143:3000/upload", formData)
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
