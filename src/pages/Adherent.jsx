import { useState } from "react";
const myPassword = "hapjjkfr42";

export default function Adherent() {
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrectPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == myPassword) {
      setIsCorrectPassword(true);
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="adherent">
      <h1>Adherent</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mot de passe :{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Soumettre</button>
      </form>
      {isCorrect ? <p>Contenu protégé</p> : null}
      {isSubmitted ? (
        <p style={{ color: "red" }}>Mauvais mot de passe</p>
      ) : null}
    </div>
  );
}
