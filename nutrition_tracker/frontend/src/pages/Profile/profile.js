import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

function Profile(){
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
            
            <h1>Profile</h1>

            <div>
                <Stack>
                    <div className='historyBtn'>
                        <Button
                            onClick={() => navigate("/history")}
                        >
                            History
                        </Button>
                    </div>
                  
                    <div className='dailyBtn'>
                        <Button
                            onClick={() => navigate("/daily")}
                        >
                            Daily
                        </Button>
                    </div>
                </Stack>
                
                
            </div>
        </div>

       
    );
}
export default Profile;