import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./create_daily.css";
import axios from "axios";

function Create_Daily(){
    const [data, setData] = useState(null);
    let navigate = useNavigate();

    // Function to handle form submission

    // enter user input to datbase

    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/daily")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className ="create_container">
            <Typography
                variant="h1"
                sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left", color: "white" }}
            >
                Create new Entry ✏️
            </Typography>

            <div className="content_container">
                {/* Form to enter daily data */}
                {/* can enter information into form and create new input form*/}
                
                <div className="back_button">
                    <Button
                       variant="contained"
                       sx={{
                        backgroundColor: "black", // Button background color
                        color: "white",           // Text color
                        '&:hover': {
                            backgroundColor: "grey", // Optional: Change color on hover
                        },
                    }}
                       onClick={() => navigate("/profile")}
                    >
                        Back
                    </Button>
                </div>


                <div>
                    {data ? <p>{data.message}</p> : <p>Loading...</p>}
                </div>
            </div>
           
        </div>
    );
}
export default Create_Daily;