import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({});

  return (
    <form>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Kata sandi
        <input type="password" />
      </label>
      <button onClick={() => {}}>Login</button>
    </form>
  );
}
