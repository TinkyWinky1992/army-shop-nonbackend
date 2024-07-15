import { Link } from 'react-router-dom';
import React from 'react';

const url = `https://waze.com/ul?q=משה דיין 26 יהוד&ll=32.035,34.877&z=10&navigate=yes`;

export const LinkMap:React.FC = () => {
    return (
    <Link to={url} target="_blank" rel="noopener noreferrer" style={{
        fontFamily:"hebrewFont",
        fontSize: "16px",
        color: "#FFFFFF" 
    }} >
        פתיחת מיקום
    </Link>
    );
}
