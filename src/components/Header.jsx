import "../../styles/header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <h1>Hapkido Jin Jung Kwan</h1>
      <h2>Saint-Etienne / Luriecq</h2>
    </div>
  );
}
