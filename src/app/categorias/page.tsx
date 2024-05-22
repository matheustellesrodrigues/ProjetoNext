'use client';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './page.css';

export default function Categorias() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="Login" />
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg form">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="relative w-full mb-4">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={toggleMostrarSenha}
              className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
            >
              {mostrarSenha ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </main>
    </div>
  );
}
