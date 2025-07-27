import { useState } from "react";

const getHeading = (firstName, lastName) => {
    if (firstName && lastName) return `${firstName} - ${lastName}`;
    if (firstName) return firstName;
    if (lastName) return lastName;
    return 'no name'
}

export default function FullName() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const knopColor = firstName?.toLowerCase() === "knapazavar" && lastName?.toLowerCase() === "knop" ? "pink" : "white";

    return(
        <>
            <h1 style={{
                color: knopColor
            }}>
                {getHeading(firstName, lastName)}
            </h1>
            <div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
            </div>
        </>
    );
};