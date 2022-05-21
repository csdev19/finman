import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import Money from 'hooks/Money';
import { ITransaction } from 'interfaces/income.interface';
import React, { FunctionComponent } from 'react';

type Props = {
  transactions: Omit<ITransaction, 'description'>[];
};

const TransactionsTable: FunctionComponent<Props> = ({ transactions }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {transaction.name}
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell align="right">
                <Money amount={transaction.amount} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
