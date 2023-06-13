import { useState } from "react";

export default function Register() {
  const [person, setPerson] = useState({
    firstName: "Eko",
    lastName: "Travada",
    email: "etravada@pasim.ac.id",
  });

  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  //   function handleFirstNameChange(e) {
  //     setPerson({ ...person, firstName: e.target.value });
  //   }

  //   function handleLastNameChange(e) {
  //     setPerson({ ...person, lastName: e.target.value });
  //   }

  //   function handleEmailChange(e) {
  //     setPerson({ ...person, email: e.target.value });
  //   }

  return (
    <form>
      <label>
        Nama depan:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Nama belakang:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </form>
  );
}
