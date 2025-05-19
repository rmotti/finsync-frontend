'use client';

import React, { useState } from 'react';
import Signup from './SignUp';                 // modal de cadastro
import { useNavigation } from '@/hooks/useNavigation';
import { api } from '@/lib/api';               // <<< cliente axios

const Login: React.FC = () => {
  // estados do formulário
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState<string | null>(null);
  const [isOpen, setIsOpen]     = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const { navigateTo } = useNavigation();

  // ----- envia dados para o backend -----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validação mínima no cliente
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      setError(null); // limpa erros antigos

      // POST http://localhost:3001/api/login
      // (baseURL do api = http://localhost:3001/api)
      const { data } = await api.post('/login', { email, password });

      // ➜ se o backend devolve { token, user }
      localStorage.setItem('token', data.token);

      // redireciona
      navigateTo('/dashboard');
    } catch (err: any) {
      // mensagem vinda do backend ou genérica
      const msg =
        err.response?.data?.message ||
        'Server unavailable. Try again later.';
      setError(msg);
    }
  };

  // ----- fecha modal -----
  const handleClose = () => setIsOpen(false);

  // ----- alterna para o formulário de cadastro -----
  const toggleForm = () => setShowSignup(!showSignup);

  // se o modal foi fechado
  if (!isOpen) return null;

  // se clicou em “Sign up”, mostra componente de cadastro
  if (showSignup) {
    return <Signup onClose={handleClose} onSwitchToLogin={toggleForm} />;
  }

  // ----- JSX do modal de login -----
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="p-6">
          {/* cabeçalho */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome to FinSync!
            </h2>
            <button
              aria-label="Close"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {/* X icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* mensagem de erro */}
            {error && (
              <div className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>

              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>

          {/* link para cadastro */}
          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={toggleForm}
              className="cursor-pointer border-none bg-transparent text-blue-600 hover:text-blue-500"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
