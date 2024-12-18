import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectList = () => {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        // Use the API URL from the environment variable
        const apiUrl = process.env.REACT_APP_API_URL;

        // Fetch the list of objects from the backend
        axios.get(`${apiUrl}/list-objects`)
            .then(response => {
                console.log("Objects fetched:", response.data); // Debugging line
                setObjects(response.data || []);
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
                    <li>No objects found in the bucket.</li>
                ) : (
                    objects.map((object) => (
                        <li key={object.Key}>
                            {object.Key} ({object.Size} bytes)
                            <a href={`${process.env.REACT_APP_API_URL}/download/${object.Key}`} download>
                                {" "}Download
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ObjectList;