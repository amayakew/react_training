import { useEffect, useState } from "react";

export default function RegistrationAgeGenderStep({onSubmit, initialAge, initialGender, formRef, setCurrentPageIsValid}) {
  const [age, setAge] = useState(initialAge);
  const [gender, setGender] = useState(initialGender);

  const options = [];
  for (let option = 1; option < 100; option++){
    options.push(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(age, gender);
  }; 

  useEffect(()=> {
    setCurrentPageIsValid(age !== '' && gender !== '')
  },[age, gender]);

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="info">
        <div className="infoInput">
          <p className="labelAgeGender">Select Age:</p>
          <select value={age} onChange={(e)=>setAge(e.target.value)} className="select" style={{width: "13em"}}>
            <option value="" disabled></option>
            {options.map(option => <option key={option}>{option}</option>)}
          </select>
        </div>
        <div>
          <p className="labelAgeGender">Select Gender: </p>
          <label>
            <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e)=> setGender(e.target.value)}/> 
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e)=> setGender(e.target.value)}/> 
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="knop" checked={gender === "knop"} onChange={(e)=> setGender(e.target.value)}/> 
            Knop
          </label>
        </div>
      </div>
    </form>
  );
}
