import RegistrationNameStep from './registrationForm/RegistrationNameStep';
import RegistrationAgeGenderStep from './registrationForm/RegistrationAgeGenderStep';
import RegistrationContactStep from './registrationForm/RegistrationContactStep';
import RegistrationPreview from './registrationForm/RegistrationPreview';
import RegistrationConfirmation from './registrationForm/RegistrationConfirmation';
import { useState } from 'react';


export default function RegistrationWizard({pageIndex, formRef, setCurrentPageIsValid}){
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phoneNumber: "",
    });

    const handleNameSubmit = (firstName, lastName) => {
        setUser((currentUser) => ({
            ...currentUser,
            firstName: firstName,
            lastName: lastName,
        }));
    };

    const handleAgeGenderSubmit = (age, gender) => {
        setUser((currentUser) => ({
            ...currentUser,
            age: age,
            gender: gender,
        }));
    };

    const handleContactSubmit = (email, phoneNumber) => {
        setUser((currentUser) => ({
            ...currentUser,
            email: email,
            phoneNumber: phoneNumber,
        }));
    };

    return (
        <>
            {pageIndex === 1 && <RegistrationNameStep 
                onSubmit={(firstName,lastName) => handleNameSubmit(firstName, lastName)}
                initialFirstName={user?.firstName}
                initialLastName={user?.lastName}
                formRef={formRef}
                setCurrentPageIsValid={setCurrentPageIsValid}
            />}
            {pageIndex === 2 && <RegistrationAgeGenderStep 
                onSubmit={(age,gender) => handleAgeGenderSubmit(age, gender)}
                initialAge={user?.age}
                initialGender={user?.gender}
                formRef={formRef}
                setCurrentPageIsValid={setCurrentPageIsValid}
            />}
            {pageIndex === 3 && <RegistrationContactStep 
                onSubmit={(email,phoneNumber) => handleContactSubmit(email, phoneNumber)}
                initialEmail={user?.email}
                initialPhone={user?.phoneNumber}
                formRef={formRef}
                setCurrentPageIsValid={setCurrentPageIsValid}
            />}
            {pageIndex === 4 && <RegistrationPreview user={user}/>}
            {pageIndex === 5 && <RegistrationConfirmation/>}
        </>
    );
};