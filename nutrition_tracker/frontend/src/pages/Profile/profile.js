import {
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./profile.css";

function Profile(){
    let navigate = useNavigate();
    //initialized to dummy values
    const [entries, setEntries] = useState(["5/7/2025", "5/8/2025", "5/9/2025", "5/10/2025", "5/11/2025", "5/12/2025", "5/13/2025", "5/14/2025", "5/15/2025", "5/16/2025"]);

    // Navigate to each entry page
        // const onOpenTicket = () => {
        //     navigate(`/ticketinfo?id=${ticketId}`)
        // }

    //call database to get all entries

    //if no entries, show message for getting started 

    return (
        <div className ="profile_container">
            
            <Typography
                variant="h1"
                sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left" }}
            >
                Welcome back
            </Typography>

            <div className ="content_container">
                <div className="nav_buttons">
                    <Stack spacing={2}>
                        <div className='historyBtn'>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "black", // Button background color
                                    color: "white",           // Text color
                                    '&:hover': {
                                        backgroundColor: "#1c3ed6d4", // Optional: Change color on hover
                                    },
                                }}
                                onClick={() => navigate("/history")}
                            >
                                See Stats 📈
                            </Button>
                        </div>
                    
                        <div className='dailyBtn'>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "black", // Button background color
                                    color: "white",           // Text color
                                    '&:hover': {
                                        backgroundColor: "#fa4949", // Optional: Change color on hover
                                    },
                                }}
                                onClick={() => navigate("/create_daily")}
                            >
                                Create New Daily Tracker ✍️
                            </Button>
                        </div>
                    </Stack>
                </div>

                <div className ="journal">
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}
                    >
                        Journal Entries 📝
                    </Typography>

                    <List className="scrollable-list">
                        {entries.map((entry) => ( //id, date 
                            <ListItem>
                                {/*clicking on each date should take to corresponding entry*/}
                                <ListItemText primary={entry} />
                            </ListItem>
                        ))}
                    </List>
                </div>
                
                {/*coursael of images*/}
            </div>
        </div>

       
    );
}
export default Profile;