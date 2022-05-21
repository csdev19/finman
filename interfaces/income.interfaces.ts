export interface ITransaction {
  id: number;
  name: string;
  description: string;
  date: Date | string;
  amount: number;
  category: string;
}

export type TCategory =
  | 'income'
  | 'expense'
  | 'fixed_cost'
  | 'variable_expends'
  | 'debts'
  | 'investment';
