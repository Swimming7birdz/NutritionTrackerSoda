import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function History(){
    let navigate = useNavigate();
    return (
        <div>
            <h1>History</h1>

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
export default History;