import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./create_daily.css";
import axios from "axios";

function Create_Daily(){
    const [data, setData] = useState(null);
    const [inputs, setInputs] = useState([0]); // State to manage input fields
    const [values, setValues] = useState({}); // State to manage input values
    const [query, setQuery] = useState("");
    const [result, setResult] = useState({});
    let navigate = useNavigate();

     // Function to add a new input field
     const addInputField = () => {
        const newInputId = inputs.length; // Unique ID for each input
        setInputs([...inputs, newInputId]); // Add a new input field
    };

    const saveInputValue = (id) => {
        //call api for food to get values
        console.log("Query value:", query);
        searchFood(); // Call the search function
        console.log(`Saved value for Input ${id}:`, values[id] || "");
    };

    const handleInputChange = (id, value) => {
        setValues({ ...values, [id]: value }); // Update the value for the specific input
        console.log(`Input ${id} changed to:`, value);
        setQuery(value); // Set the query to the current input value
    };

    const extractFoodInfo = (data) => {
        if (!data || !data.labelNutrients) {
            throw new Error("Invalid data: labelNutrients is undefined");
        }
    
        const cals = data.labelNutrients.calories && data.labelNutrients.calories.value !== undefined
            ? data.labelNutrients.calories.value
            : "NA";
    
        const protein = data.labelNutrients.protein && data.labelNutrients.protein.value !== undefined
            ? data.labelNutrients.protein.value
            : "NA";
        const nutrition = {"calories": cals, "protein": protein};
        return nutrition;
    }


    const searchFood = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/search?query=${query}`);
            const data = await response.json();
            console.log("Food data:", data);
            const foodInfo = extractFoodInfo(data);
            setResult({ ...result, [query]: foodInfo });
            
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };

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
                Create Meal 🍽️
            </Typography>

            <div className="bttns"
                style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1rem", margin: "20px"}}>
                    <div className="add_button">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "black",
                                color: "white",
                                '&:hover': {
                                    backgroundColor: "grey",
                                },
                                
                            }}
                            onClick={addInputField}
                        >
                            Add Food Item
                        </Button>
                    </div>

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

                    <div className="submit_button">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "black", // Button background color
                                color: "white",           // Text color
                                '&:hover': {
                                    backgroundColor: "grey", // Optional: Change color on hover
                                },
                            }}
                            onClick={() => {
                                alert("Daily data submitted successfully!");
                                navigate("/profile"); // Navigate after 2 seconds
                                
                            }}
                        >
                            Submit
                        </Button>
                    </div>
            </div>

           
            <div className="entry_container"
                style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1rem" }}>
                    {/* Form to enter daily data */}
                    {/* can enter information into form and create new input form*/}
              
                    <div className="input_fields" >
                        {inputs.map((id) => (
                            <div key={id} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                                <TextField
                                    label={`Food item ${id + 1}`}
                                    variant="outlined"
                                    value={values[id] || ""}
                                    color="white"
                                    onChange={(e) => handleInputChange(id, e.target.value)} //move to
                                    sx={{ marginRight: "1rem", flex: 1 }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "black",
                                        color: "white",
                                        '&:hover': {
                                            backgroundColor: "grey",
                                        },
                                    }}
                                    onClick={() => saveInputValue(id)} // Pass the current value explicitly
                                >
                                    Save Item
                                </Button>

                                <div>
                                    
                                    <pre>{JSON.stringify(result[values[id]], null, 2)}</pre> 
                                    
                                </div>
                            </div>
                        ))}
                    </div>
            </div>

                <div>
                    {data ? <p>{data.message}</p> : <p>Loading...</p>}
                </div>
        </div>
        
    );
}
export default Create_Daily;