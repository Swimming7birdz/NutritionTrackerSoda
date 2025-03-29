import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Profile(){
    let navigate = useNavigate();

    return (
        <div>
            <h1>Profile</h1>

            <div>
                <Button
                    onClick={() => navigate("/history")}
                >
                    History
                </Button>

                <Button
                    onClick={() => navigate("/daily")}
                >
                    Daily
                </Button>
                
            </div>
        </div>

       
    );
}
export default Profile;