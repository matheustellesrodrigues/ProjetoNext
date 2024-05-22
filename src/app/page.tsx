'use client'
import { useState } from "react";
import NavBar from "./components/NavBar";

import './inicial.css'

type QuartoInfo = {
  tipo: string;
  hospede: string;
  cpf: string;
  dataNascimento: string;
  numeroQuarto: number;
  reserva: {
    checkIn: string;
    checkOut: string;
    valor: number;
  };
};

export default function Home() {

  const [quartoSelecionado, setQuartoSelecionado] = useState<number | null>(
    null
  );

  const quartos: QuartoInfo[] = [
    {
      tipo: "Casal",
      hospede: "Daniel Alvez De Souza",
      cpf: "123.456.789-00",
      numeroQuarto: 2101,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Master",
      hospede: "Matheus de Castro Telles",
      cpf: "987.654.321-01",
      numeroQuarto: 2102,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Carlos Roberto",
      cpf: "123.456.789-00",
      numeroQuarto: 2103,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Among us",
      cpf: "123.456.789-00",
      numeroQuarto: 2104,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Among us",
      cpf: "123.456.789-00",
      numeroQuarto: 2105,
      dataNascimento: "01/01/1980",
      reserva: {
      checkIn: "01/05/2024",
      checkOut: "05/05/2024",
      valor: 500,
      },
    },
  {
    tipo: "Casal",
    hospede: "Among us",
    cpf: "123.456.789-00",
    numeroQuarto: 2106,
    dataNascimento: "01/01/1980",
    reserva: {
    checkIn: "01/05/2024",
    checkOut: "05/05/2024",
    valor: 500,
    },
  },
];
  return (
    <div className="relative flex flex-col min-h-screen wrapper">
      <NavBar active="Página Inicial" />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-center">Mapa de Reservas</h2>
        {}
      </div>
  
      <main className="pagina-inicial">
        <div className="quartos">
          {quartos.map((quarto, index) => (
            <div
              key={index}
              className='w-20 h-20 bg-gray-700 mr-4 mb-4 cursor-pointer quarto'
              onClick={() => setQuartoSelecionado(index)}
            >
              <p>{quarto.numeroQuarto}</p>
            </div>
          ))}
        </div>
  
        <div className="info">
          {quartoSelecionado !== null && (
            <div className="">
              <p className="font-bold">{quartos[quartoSelecionado].tipo}</p>
              <p>Hóspede: {quartos[quartoSelecionado].hospede}</p>
              <p>CPF: {quartos[quartoSelecionado].cpf}</p>
              <p>Data de Nascimento: {quartos[quartoSelecionado].dataNascimento}</p>
              <p>Check-In: {quartos[quartoSelecionado].reserva.checkIn}</p>
              <p>Check-Out: {quartos[quartoSelecionado].reserva.checkOut}</p>
              <p>Valor da Reserva: R$ {quartos[quartoSelecionado].reserva.valor}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
  
}
