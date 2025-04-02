import { useEffect, useState } from "react";
import axios from "axios";

export function useContent() {
    const [contents, setContent] = useState([]);
    const [error, setError] = useState("");

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

             
                console.log("response.data:", response.data); // Log `data` object
    setContent(response.data)
              
            } catch (err) {
                console.error("Error fetching content:", err);
           
            }
        };

        fetchContent();
    }, []);

    return { contents, error };
}
