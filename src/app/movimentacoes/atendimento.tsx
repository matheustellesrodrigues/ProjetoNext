import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

interface Room {
  id: number;
  name: string;
  price: number;
  size: string;
  hasTV: boolean;
  hasFridge: boolean;
  hasAC: boolean;
}

const rooms: Room[] = [
  { id: 1, name: 'Quarto Simples', price: 100, size: 'Pequeno', hasTV: false, hasFridge: false, hasAC: false },
  { id: 2, name: 'Quarto Standard', price: 150, size: 'Médio', hasTV: true, hasFridge: false, hasAC: false },
  { id: 3, name: 'Quarto Conforto', price: 200, size: 'Médio', hasTV: true, hasFridge: true, hasAC: false },
  { id: 4, name: 'Suíte Luxo', price: 300, size: 'Grande', hasTV: true, hasFridge: true, hasAC: true },
  { id: 5, name: 'Suíte Premium', price: 400, size: 'Grande', hasTV: true, hasFridge: true, hasAC: true },
];

export default function Atendimento() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Atendimento" />
      <h2>Atendimento</h2>
      <div className="rooms-list">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p>Preço: R${room.price},00</p>
            <p>Tamanho: {room.size}</p>
            <p>TV: {room.hasTV ? 'Sim' : 'Não'}</p>
            <p>Frigobar: {room.hasFridge ? 'Sim' : 'Não'}</p>
            <p>Ar-condicionado: {room.hasAC ? 'Sim' : 'Não'}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
