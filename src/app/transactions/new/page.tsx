// app/dashboard/transactions/new/page.tsx
'use client';
import { TransactionForm } from '@/components/TransactionForm';
import { useRouter } from 'next/navigation';

export default function NewTransactionPage() {
  const router = useRouter();
  
  const handleAddTransaction = (transaction: any) => {
    // Aqui você enviaria para uma API ou contexto
    console.log('Nova transação:', transaction);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Nova Transação</h1>
      </header>
      
      <div className="max-w-md mx-auto">
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>
    </div>
  );
}