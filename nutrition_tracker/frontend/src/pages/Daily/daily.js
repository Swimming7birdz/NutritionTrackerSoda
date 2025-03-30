import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Daily(){
    let navigate = useNavigate();
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
        </div>
    );
}
export default Daily;