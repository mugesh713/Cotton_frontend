import React from "react";

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Cotton Price Prediction</h1>
            <p>This project uses machine learning models to predict cotton prices based on input date.</p>
            <p>It is the accurate value of cotton price. It may go down, but we can know the level of cotton price using this tool!</p>
            <p>We have taken data from various places, mostly the cotton price is near the original value.</p>
            <p>
                We can use some websites to get updates on cotton prices: 
                <a href="https://www.indexmundi.com/commodities/?commodity=cotton&months=60&currency=inr" target="_blank" rel="noopener noreferrer">
                    Cotton Price Updates
                </a>
            </p>
        </div>
    );
};

export default AboutPage;
