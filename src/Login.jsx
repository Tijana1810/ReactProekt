// src/Login.jsx
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Симулирај логирање (за поврзување со JSON Server)
    console.log("User Logged In: ", { email, password });

    // Овде можеш да додадеш API повик за логирање
  };

  return (
    <div>
      <h2>Логирање</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Емаил"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Лозинка"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Логирај се</button>
      </form>
    </div>
  );
};

export default Login;
