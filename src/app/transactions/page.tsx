// app/dashboard/transactions/page.tsx
'use client';
import { TransactionCard } from '@/components/TransactionCard';

export default function TransactionsPage() {
  // Aqui você buscaria as transações de uma API ou contexto
  type Transaction = {
    description: string;
    amount: number;
    type: 'income' | 'expense';
    date: string;
    category: string;
  };

  const transactions: Transaction[] = []; // Substitua por seus dados reais
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Todas as Transações</h1>
      </header>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
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
          <p className="text-gray-500 text-center py-12">Nenhuma transação encontrada</p>
        )}
      </div>
    </div>
  );
}