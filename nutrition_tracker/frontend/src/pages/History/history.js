import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./history.css";

function History(){
    let navigate = useNavigate();

    return (
        <div className ="history_container">
             <Typography
                variant="h1"
                sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left", color: "white" }}
            >
                The Break Down 📊
            </Typography>


            <div className="content_container">
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

            </div>
           
        </div>
    );
}
export default History;