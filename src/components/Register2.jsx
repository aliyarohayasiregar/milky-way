import { useImmer } from "use-immer";

export default function Register2() {
  const [person, setPerson] = useImmer({
    name: {
      first: "Eko",
      last: "Travada",
    },
    email: "etravada@pasim.ac.id",
  });

  function handleFirstNameChange(e) {
    setPerson((draft) => {
      draft.name.first = e.target.value;
    });
  }

  function handleLastNameChange(e) {
    setPerson((draft) => {
      draft.name.last = e.target.value;
    });
  }

  function handleEmailChange(e) {
    setPerson((draft) => {
      draft.email = e.target.value;
    });
  }

  return (
    <form>
      <label>
        Nama depan:
        <input value={person.name.first} onChange={handleFirstNameChange} />
      </label>
      <label>
        Nama belakang:
        <input value={person.name.last} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.name.first} {person.name.last} ({person.email})
      </p>
    </form>
  );
}
