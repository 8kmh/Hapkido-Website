import Navbar from "./Navbar";
import "../../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <h1>Hapkido Jin Jung Kwan</h1>
      <h2>Saint-Etienne / Luriecq</h2>
    </div>
  );
}
