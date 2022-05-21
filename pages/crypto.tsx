import { Autocomplete, Button, Divider, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { ICrypto } from 'interfaces/crypto.interfaces';
import DashboardLayout from 'layouts/DashboardLayout';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { cryptoService } from 'services';

const CryptoPage: NextPage = () => {
  const [cryptos, setCryptos] = useState<Array<ICrypto>>([]);
  const [transaction, setTransaction] = useState<{
    date: string;
    quantity: number;
    price: number;
    crypto: number | undefined;
  }>({
    date: '',
    quantity: 0,
    price: 0,
    crypto: undefined,
  });

  useEffect(() => {
    const fetch = async () => {
      const data = await cryptoService.getCryptos();
      setCryptos(data);
    };
    fetch();
  }, []);

  const handleSave = () => {
    console.log('transaction', transaction);
  };

  return (
    <>
      <DashboardLayout>
        <Box>
          <TextField
            sx={{ mt: 1, mb: 1 }}
            type="number"
            fullWidth
            label="Quantity"
            color="primary"
            value={transaction.quantity}
            onChange={(event) =>
              setTransaction({
                ...transaction,
                quantity: Number(event.target.value),
              })
            }
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            type="number"
            fullWidth
            label="Price"
            color="primary"
            value={transaction.price}
            onChange={(event) =>
              setTransaction({
                ...transaction,
                price: Number(event.target.value),
              })
            }
          />
          <Autocomplete
            disablePortal
            fullWidth={true}
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            sx={{ mt: 1, mb: 1 }}
            onChange={(event, newValue: ICrypto | null) => {
              setTransaction({
                ...transaction,
                crypto: newValue?.id,
              });
            }}
            options={cryptos}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                  alt=""
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                  }}
                />
                {option.name} - {option.symbol}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Select crypto" />
            )}
          />

          <Divider />
          <Box sx={{ marginTop: '20px', display: 'flex' }}>
            <Box sx={{ flex: '1 1 auto' }}></Box>
            <Button onClick={() => console.log('hola como estas')}>
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Crear
            </Button>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default CryptoPage;
