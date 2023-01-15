import { useState } from "react";
const myPassword = "hapjjkfr42";

export default function Adherent() {
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrectPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidCheck, setIsValidCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == myPassword) {
      localStorage.setItem(
        "access_token",
        "3174A6F92C489A0FA457366B0C7D17565D66072D81AE89E612888CD053553ACE"
      );
      setIsCorrectPassword(true);
      setIsSubmitted(false);
      setIsValidCheck(true);
    } else {
      setIsSubmitted(true);
    }
  };

  const checkToken = () => {
    return localStorage.getItem("access_token");
  };

  return (
    <div className="adherent">
      <h1>Adhérent</h1>
      {!isValidCheck && !checkToken() ? (
        <form onSubmit={handleSubmit}>
          <label>
            Mot de passe :
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Soumettre</button>
        </form>
      ) : null}

      {isCorrect ||
      checkToken() ===
        "3174A6F92C489A0FA457366B0C7D17565D66072D81AE89E612888CD053553ACE" ? (
        <p>Contenu protégé</p>
      ) : null}
      {isSubmitted ? (
        <p style={{ color: "red" }}>Mauvais mot de passe</p>
      ) : null}
    </div>
  );
}
