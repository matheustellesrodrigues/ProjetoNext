import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <NavBar active="Página Inicial"/>
      <main className="flex-grow flex items-end justify-start px-4 pb-4">
        <div className="absolute top-20 left-0 bg-gray-200 p-4">
          <p className="font-bold">Casal Master Duplo Triplo Queen Suite</p>
        </div>
        <div className="flex flex-col items-start">
          <h2>Mapa de Reservas</h2>
          <div className="flex flex-col">
            <p className="mb-2">Daniel Alvez De Souza</p>
            <p className="mb-2">Matheus De Castro Telles Rodrigues</p>
            <p className="mb-2">Henry Ribeiro Komatsu</p>
            <p>Raphaela Arozena</p>
          </div>
        </div>
      </main>
    </div>
  );
}
