import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Movimentacoes() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Atendimento" />
      <h2>Atendimento</h2>
    </main>
  );
}
