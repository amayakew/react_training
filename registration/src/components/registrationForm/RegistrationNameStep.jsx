import { useEffect, useState } from "react";

export default function RegistrationNameStep({
  onSubmit,
  initialFirstName,
  initialLastName,
  formRef,
  setCurrentPageIsValid
}) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(firstName, lastName);
  };
  
  useEffect(() => {
    setCurrentPageIsValid(firstName !== '' && lastName !== '')
  }, [firstName, lastName]);

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="info">
        <div className="infoInput">
          <label htmlFor="firstName">First Name: </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="infoInput">
          <label htmlFor="lastName">Last Name: </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
