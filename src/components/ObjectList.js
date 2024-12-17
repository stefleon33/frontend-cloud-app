import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectList = () => {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        axios.get("http://184.73.251.143:3000/list-objects")
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
                        <a href={`http://184.73.251.143:3000/download/${object.Key}`} download>
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
