import { useState } from "react";

export default function RegistrationPreview({user}){
    const {firstName, lastName, age, gender, email, phoneNumber} = user;

    return (
        <>
            <div className="preview">
                <p>First Name: <span>{firstName}</span></p>
                <p>Last Name: <span>{lastName}</span></p>
                <p>Age: <span>{age}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Email: <span>{email}</span></p>
                <p>Phone Number: <span>{phoneNumber}</span></p>
            </div>
        </>
    );
};