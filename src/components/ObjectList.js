import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectList = () => {
    const [objects, setObjects] = useState([]);
    const bucketName = process.env.REACT_APP_BUCKET_NAME; // Make sure to set this in your .env file

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log('API URL:', apiUrl);

        // Fetch the list of objects from the backend
        axios.get(`${apiUrl}/list-objects`)
            .then(response => {
                console.log("Objects fetched:", response.data); // Debugging line
                setObjects(response.data.objects || []);
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
                            <a href={`https://${bucketName}.s3.amazonaws.com/${object.Key}`} download>
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
