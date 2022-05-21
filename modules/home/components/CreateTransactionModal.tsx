import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Button,
} from '@mui/material';
import BaseModal from 'components/BaseModal';
import { ITransaction, TCategory } from 'interfaces/income.interfaces';
import React, { FunctionComponent, useState } from 'react';

const currencies: { value: string; label: TCategory }[] = [
  {
    value: 'income',
    label: 'income',
  },
  {
    value: 'expense',
    label: 'expense',
  },
  {
    value: 'fixed_cost',
    label: 'fixed_cost',
  },
  {
    value: 'variable_expends',
    label: 'variable_expends',
  },
  {
    value: 'debts',
    label: 'debts',
  },
  {
    value: 'investment',
    label: 'investment',
  },
];

type Props = {
  open: boolean;
  onClose: VoidFunction;
  onSave: (data: any) => void;
};

const CreateTransactionModal: FunctionComponent<Props> = ({
  open,
  onClose,
  onSave,
}) => {
  const [transaction, setTransaction] = useState<Omit<ITransaction, 'id'>>({
    amount: 0,
    category: '',
    description: '',
    name: '',
    date: '',
  });

  const handleSave = () => {
    console.log('hola');
    onSave({
      hola: 'hola',
    });
  };
  return (
    <>
      <BaseModal open={open} onClose={onClose}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a new transaction
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Here you can create a new transaction only with the description,
          amount and type
        </Typography>
        <TextField
          sx={{ mt: 1, mb: 1 }}
          fullWidth
          label="Description"
          color="primary"
          value={transaction.description}
          onChange={(event) =>
            setTransaction({
              ...transaction,
              description: event.target.value,
            })
          }
        />
        <TextField
          sx={{ mt: 1, mb: 1 }}
          fullWidth
          label="Amount"
          color="primary"
          type="number"
          value={transaction.amount}
          onChange={(event) =>
            setTransaction({
              ...transaction,
              amount: Number(event.target.value),
            })
          }
        />
        <TextField
          sx={{ mt: 1, mb: 1 }}
          id="outlined-select-currency"
          select
          fullWidth
          label="Category"
          value={transaction.category}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTransaction({
              ...transaction,
              category: event.target.value as TCategory,
            });
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Divider />
        <Box sx={{ marginTop: '20px', display: 'flex' }}>
          <Box sx={{ flex: '1 1 auto' }}></Box>
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSave}>
            Crear
          </Button>
        </Box>
      </BaseModal>
    </>
  );
};

export default CreateTransactionModal;
