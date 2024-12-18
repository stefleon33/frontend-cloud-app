import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectList = () => {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log('API URL:', apiUrl);

        // Fetch the list of objects from the backend
        axios.get(`${apiUrl}/list-objects`)
            .then(response => {
                console.log("Objects fetched:", response.data); // Debugging line
                // Filter out the 'uploads/' folder and only show files inside it
                const files = response.data.Contents.filter(object => !object.Key.endsWith('/'));
                setObjects(files || []);
            })
            .catch(error => {
                console.error("Error fetching objects:", error);
            });
    }, []);

    return (
        <div>
            <h1>Objects in Bucket</h1>
            <ul>
                {objects.length === 0 ? (
                    <li>No objects found in the uploads folder.</li>
                ) : (
                    objects.map((object) => (
                        <li key={object.Key}>
                            {object.Key} ({object.Size} bytes)
                        <a href={`${process.env.REACT_APP_API_URL}/download/${object.Key.split('/')[1]}`} target="_blank" rel="noopener noreferrer">
                            Download {object.Key.split('/')[1]}
                        </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ObjectList;

