import { useState } from "react";


export default function ProfileForm(props){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[gender, setGender] = useState('');
    // const {firstName, lastName, age, gender} = props.user;

    const buttonIsDisabled = [firstName, lastName, age, gender].every(i => i !== '');

    const options = [];
    for (let num=1; num<=99; num++){
        options.push(num);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({firstName, lastName, age, gender});

        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');
    }

    return (
        <form 
            style={{display: "flex", flexDirection: "column", border: "1px solid", padding: "1.5em", borderRadius: "1em"}} 
            onSubmit={handleSubmit}
        >
            <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        required 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        type="text" 
                        id="lastName" 
                        required 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <select 
                    id="age" 
                    required 
                    style={{width: "50%", alignSelf: "center"}} 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                >
                    <option value="" disabled>--- Your Age ---</option>
                    {options.map((option, i)=> <option key={i} value={option}>{option}</option>)}
                </select>
            </div>

            <div style={{margin: "1em 0"}}>
                <p style={{margin: "0.1em"}}>Select Gender:</p>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={gender === "male"} 
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={gender === "female"} 
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="knop" 
                        checked={gender === "knop"} 
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Knop
                </label>
            </div>
            <button 
                type="submit" 
                disabled={!buttonIsDisabled} 
                style={{backgroundColor: !buttonIsDisabled ? "lightcoral" : "lightgreen"}}
            >
                UPDATE
            </button>
        </form>
    );
};