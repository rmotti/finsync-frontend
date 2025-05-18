// components/SummaryCard.tsx
interface SummaryCardProps {
  income: number;
  expenses: number;
  balance: number;
}

export const SummaryCard = ({ income, expenses, balance }: SummaryCardProps) => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
      <p className="text-sm text-green-600">Entradas</p>
      <p className="text-xl font-bold text-green-700">R$ {income.toFixed(2)}</p>
    </div>
    
    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
      <p className="text-sm text-red-600">Saídas</p>
      <p className="text-xl font-bold text-red-700">R$ {expenses.toFixed(2)}</p>
    </div>
    
    <div className={`p-4 rounded-lg border ${balance >= 0 ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'}`}>
      <p className="text-sm text-gray-600">Saldo</p>
      <p className={`text-xl font-bold ${balance >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>
        R$ {balance.toFixed(2)}
      </p>
    </div>
  </div>
);