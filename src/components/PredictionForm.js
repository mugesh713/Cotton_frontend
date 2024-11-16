import React, { useState } from "react";
import axios from "axios";

const PredictionForm = () => {
    const [date, setDate] = useState("");
    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://cotton-model-2-latest.onrender.com/predict",
                new URLSearchParams({ date_str: date }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    withCredentials: true, // Enable credentials
                }
            );
            
            setPrediction(response.data.predicted);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div className="prediction-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Give the date as mentioned there!..<br></br>
                    Enter a Date (YYYY-MM-DD):
                    <input
                        type="text"
                        placeholder="2024-01-01"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Predict</button>
            </form>
            {prediction && (
                <div className="prediction-result">
                    <h2>Predicted Value: {prediction}</h2>
                </div>
            )}
        </div>
    );
};

export default PredictionForm;
