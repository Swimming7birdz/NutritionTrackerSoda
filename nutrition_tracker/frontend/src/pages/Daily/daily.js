import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Daily(){
    const [data, setData] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/daily")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#DBDADA",
                padding: 50,
                gap: 50,
            }}
        >
            <h1>Daily</h1>

            <div>
                <Button
                    onClick={() => navigate("/profile")}
                >
                    Back
                </Button>
            </div>

            <div>
                {data ? <p>{data.message}</p> : <p>Loading...</p>}
            </div>
        </div>
    );
}
export default Daily;