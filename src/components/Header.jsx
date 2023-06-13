import { GiGalaxy } from "react-icons/gi";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <GiGalaxy size={24} />
        <div>Bima Sakti</div>
      </div>
      <button>Login</button>
    </header>
  );
}
