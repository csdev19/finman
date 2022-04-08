import React, { VoidFunctionComponent } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Money from 'hooks/Money';

export type TCategory =
  | 'income'
  | 'expense'
  | 'fixed_cost'
  | 'variable_expends'
  | 'debts'
  | 'investment';

function createData(
  name: string,
  amount: number,
  date: string,
  category: TCategory,
) {
  return { name, amount, date, category };
}

const rows = [
  createData('Pago 1', 159, '2022-04-08', 'variable_expends'),
  createData('Pago tarjeta 2', 237, '2022-04-08', 'variable_expends'),
  createData('Ingreso sueldo globaltask', 262, '2022-04-08', 'income'),
  createData('Invertsion crypto', 305, '2022-04-08', 'investment'),
  createData('Pago tarjeta 3', 356, '2022-04-08', 'variable_expends'),
];

const DenseTable: VoidFunctionComponent = () => {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">
                <Money amount={row.amount} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
