// components/TransactionForm.tsx
'use client';
import { useState } from 'react';

export const TransactionForm = ({ onAddTransaction }: { onAddTransaction: (transaction: any) => void }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date().toISOString()
    });
    setFormData({ description: '', amount: '', type: 'expense', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Nova Transação</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Valor (R$)</label>
          <input
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value as 'income' | 'expense'})}
            className="w-full p-2 border rounded"
          >
            <option value="expense">Saída</option>
            <option value="income">Entrada</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Adicionar Transação
        </button>
      </div>
    </form>
  );
};