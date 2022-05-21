import { Box } from '@mui/material';
import DashboardLayout from 'layouts/DashboardLayout';
import { NextPage } from 'next';
import React from 'react';

const ExpensePage: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <Box>ExpensePage</Box>
      </DashboardLayout>
    </>
  );
};

export default ExpensePage;
