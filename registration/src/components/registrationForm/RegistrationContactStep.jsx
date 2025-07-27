import { useEffect, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phoneRegex = /^\+?[0-9\s\-().]{7,}$/;

export default function RegistrationContactStep({
  onSubmit,
  initialEmail,
  initialPhone,
  formRef,
  setCurrentPageIsValid
}) {
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, phone);
  };

  useEffect(()=>{
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = phoneRegex.test(phone);
    setCurrentPageIsValid(isEmailValid && isPhoneValid)
  },[email,phone]);

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="info">
        <div className="infoInput">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="infoInput">
          <label htmlFor="phone">Phone Number: </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
