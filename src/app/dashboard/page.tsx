'use client';
import { useState } from 'react';
import { SummaryCard } from '@/components/SummaryCard';
import { TransactionCard } from '@/components/TransactionCard';
import Link from 'next/link';

type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Finanças Pessoais</h1>
        <p className="text-gray-600">Gerencie suas entradas e saídas</p>
      </header>

      <SummaryCard income={income} expenses={expenses} balance={balance} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Transações Recentes</h2>
            <Link 
              href="transactions/new"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              + Nova Transação
            </Link>
          </div>

          <div className="space-y-3">
            {transactions.length > 0 ? (
              transactions.map((t, i) => (
                <TransactionCard
                  key={i}
                  id={i.toString()}
                  description={t.description}
                  amount={t.amount}
                  type={t.type}
                  date={t.date}
                  category={t.category}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhuma transação registrada</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Resumo</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-2">Total de transações: {transactions.length}</p>
            <p className="text-gray-600 mb-2">Última transação: {
              transactions[0] ? new Date(transactions[0].date).toLocaleDateString() : 'N/A'
            }</p>
            <Link 
              href="transactions"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium block mt-4"
            >
              Ver todas as transações →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
