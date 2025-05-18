// components/TransactionCard.tsx
interface TransactionCardProps {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
}

export const TransactionCard = ({
  description,
  amount,
  type,
  date,
  category
}: TransactionCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow mb-3 border-l-4 ${type === 'income' ? 'border-green-500' : 'border-red-500'}">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium">{description}</h3>
        <p className="text-sm text-gray-500">{category} • {new Date(date).toLocaleDateString()}</p>
      </div>
      <span className={`font-bold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
        {type === 'income' ? '+' : '-'}R$ {amount.toFixed(2)}
      </span>
    </div>
  </div>
);