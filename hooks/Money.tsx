import React, { FunctionComponent } from 'react';

type MoneyProps = {
  amount: number;
};

const Money: FunctionComponent<MoneyProps> = ({ amount }) => {
  const formatMoney = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(amount);
  };
  return <>{formatMoney(amount)}</>;
};

export default Money;
