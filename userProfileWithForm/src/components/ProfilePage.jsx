import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileForm from "./ProfileForm";

export default function ProfilePage(){
    // const[firstName, setFirstName] = useState('');
    // const[lastName, setLastName] = useState('');
    // const[age, setAge] = useState('');
    // const[gender, setGender] = useState('');

    // const userDetails={firstName, lastName, age, gender};

    const [currentUser, setCurrentUser] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: ''
    });

    const handleUpdate = (userDetails) => {
        // e.preventDefault();

        setCurrentUser(userDetails);
        
        // setFirstName('');
        // setLastName('');
        // setAge('');
        // setGender('');
    };

    return (
        <div style={{textAlign: "center"}}>
            <h3 style={{textDecoration: "underline"}}>User's profile:</h3>
            <div style={{display: "flex", flexDirection: "column", gap: "2em", textAlign: "center"}}>
                <div>
                    {currentUser.gender === "knop" && <p style={{margin: 0}}>🐲</p>}
                    <ProfileDetails currentUserDetails={currentUser}/>
                </div>
                <ProfileForm
                    // user = {userDetails}
                    // updateFirstName={(e) => setFirstName(e.target.value)}
                    // updateLastName={(e) => setLastName(e.target.value)}
                    // updateAge={(e) => setAge(e.target.value)}
                    // updateGender={(e) => setGender(e.target.value)}
                    onSubmit = {(userDetails) => handleUpdate(userDetails)}
                /> 
            </div>
        </div>
    );
};