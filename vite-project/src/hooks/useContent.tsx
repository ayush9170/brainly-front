import { useEffect, useState } from "react";
import axios from "axios";

export function useContent() {
    const [contents, setContent] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    console.error("No token found in localStorage");
                    setError("No token found in localStorage");
                    return;
                }

                const response = await axios.get("http://localhost:3000/api/v1/content", {
                    headers: { authorization: `Bearer ${token}` },
                });

                console.log("Full API Response:", response); // Log full response
                console.log("response.data:", response.data); // Log `data` object

                if (response.data && Array.isArray(response.data.content)) {
                    console.log("Setting content:", response.data.content);
                    setContent(response.data.content);
                } else {
                    console.error("Unexpected response structure:", response.data);
                    setError("Unexpected response structure");
                }
            } catch (err) {
                console.error("Error fetching content:", err);
                setError(err.message);
            }
        };

        fetchContent();
    }, []);

    return { contents, error };
}
