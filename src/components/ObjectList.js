import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectList = () => {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        // Use the API URL from the environment variable
        const apiUrl = process.env.REACT_APP_API_URL;

        axios.get(`${apiUrl}/list-objects`)
            .then(response => setObjects(response.data.Contents || []))
            .catch(error => console.error("Error fetching objects:", error));
    }, []);


    return (
        <div>
            <h1>Objects in Bucket</h1>
            <ul>
                {objects.map((object) => (
                    <li key={object.Key}>
                        {object.Key} ({object.Size} bytes)
                        <a href={`${process.env.REACT_APP_API_URL}/download/${object.Key}`} download>
                            {" "}
                            Download
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ObjectList;
